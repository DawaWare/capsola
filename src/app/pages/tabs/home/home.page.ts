import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { debounceTime, Subject } from 'rxjs';
import { SITE_URL } from '../../../global';
import { AnalyticsService } from '../../../services/analytics.service';
import { DrugsService } from '../../../services/drugs.service';
import { StorageService } from '../../../services/storage.service';

export interface Drug {
  id: number;
  tradename: string;
  activeingredient: string;
  price: string;
  company: string;
  info: string;
  group:string;
}

export type SearchableKeys =
  | 'tradename'
  | 'activeingredient'
  | 'company'
  | 'group'
  | 'pamphlet'
  | 'dosage'
  | 'composition'
  | 'price'
  | 'id'
  | 'all';

export type SegmentType = 'all' | 'history';
export type SearchType = 'exact' | 'approximate';
export type QueryParams =
  | {
      searchKey?: SearchableKeys;
      searchType?: SearchType;
      searchTerm?: string;
    }
  | null
  | undefined;

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';
  searchTerm$ = new Subject<string>();
  drugs: Drug[] = [];
  drugsToShow: Drug[] = [];
  worker: Worker = new Worker(new URL('./home.worker', import.meta.url));
  searchType: SearchType = 'exact';
  searchKey: SearchableKeys = 'tradename';
  segmentType: SegmentType = 'all';
  drugsHistory: Drug[] = [];
  noHistory: boolean = false;
  isLoading: boolean = true;
  constructor(
    private drugsService: DrugsService,
    private alertController: AlertController,
    private storage: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private analytics: AnalyticsService,
    private platform: Platform
  ) {
    //TODO: Support browsers that don't support web workers
    if (typeof Worker !== 'undefined') {
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  async ngOnInit() {
    this.analytics.setSecreenName('Home');
    this.drugsService.drugs$.subscribe((data: Drug[]) => {
      this.drugs = data;
      //send drugs to worker
      this.worker.postMessage({
        drugs: this.drugs,
      });

      this.drugsToShow = this.drugs;

      setTimeout(() => {
        this.isLoading = false;
      }, 200);
      this.prepareSearch();
      this.showSearchResults();
    });


    this.route.queryParams.subscribe(() => {
      const queryParams: QueryParams =
        this.router.getCurrentNavigation()?.extras?.queryParams;
      if (
        queryParams &&
        queryParams.searchTerm &&
        queryParams.searchKey &&
        queryParams.searchType
      ) {
        this.searchKey = queryParams.searchKey;
        this.searchTerm = queryParams.searchTerm;
        this.searchType = queryParams.searchType;
        this.doSearch(
          queryParams.searchTerm,
          queryParams.searchKey,
          queryParams.searchType
        );
      }
    });
  }

  isCapacitor(){
    return this.platform.is('capacitor');
  }

  downloadOnGooglePlay(){
    window.open('https://play.google.com/store/apps/details?id=com.dawaware.capsola', '_system');
  }

  onSearchInput(event: Event) {
    this.searchTerm$.next((event.target as HTMLTextAreaElement).value);
  }

  prepareSearch() {
    this.searchTerm$.pipe(debounceTime(200)).subscribe((term) => {
      console.time('Search took: ');
      this.searchTerm = term;
      this.doSearch(term);
    });
  }

  doSearch(
    term: string,
    searchKey?: SearchableKeys,
    searchType?: 'exact' | 'approximate'
  ) {
    if (term.length === 0) {
      this.drugsToShow = this.drugs;
      return;
    }
    if (this.searchType === 'exact' && !searchType) {
      this.worker.postMessage({
        searchTerm: term,
        searchKey: this.searchKey,
        searchType: 'exact',
      });
    } else if (searchKey && searchType) {
      //console.log('searching with key and type');
      this.worker.postMessage({
        searchTerm: term,
        searchKey: searchKey,
        searchType: searchType,
      });
    } else if (this.searchType === 'approximate') {
      this.worker.postMessage({
        searchTerm: term,
        searchKey: this.searchKey,
        searchType: 'approximate',
      });
    }
  }
  showSearchResults() {
    this.worker.onmessage = ({ data }) => {
      //console.log(data);
      if (data.length === 0) {
        //console.log('no results found');
        //this.presentNoResultsFoundAlert();
        this.presenetNotFoundUI();
      } else {
        this.drugsToShow = data;
      }
      console.timeEnd('Search took: ');
    };
  }
  presenetNotFoundUI() {
    //empty the drugs to show
    this.drugsToShow = [];
  }

  doApproximateSearch() {
    //console.log('open AI');
    this.searchType = 'approximate';
    this.doSearch(this.searchTerm);
    this.searchType = 'exact';
  }

  changeSegmentTo(event: Event) {
    const customEvent = event as CustomEvent;
    const segmentType: SegmentType = customEvent.detail.value;
    if (segmentType === 'history') {
      //console.log('history');
      this.storage.get('history').then((data) => {
        if (data) {
          const history = JSON.parse(data);
          //console.log(history);
          this.drugsToShow = history;
        } else {
          this.drugsToShow = [];
          this.noHistory = true;
        }
      });
    } else if (segmentType === 'all') {
      this.drugsToShow = this.drugs;
    }
  }
  async chooseToSearchBy() {
    const alert = await this.alertController.create({
      header: 'Select To Search By:',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.searchKey = data;
          },
        },
      ],
      inputs: [
        {
          label: 'Tradename',
          type: 'radio',
          value: 'tradename',
        },
        {
          label: 'Active Ingredient',
          type: 'radio',
          value: 'activeingredient',
        },
        {
          label: 'Company',
          type: 'radio',
          value: 'company',
        },
        {
          label: 'Group',
          type: 'radio',
          value: 'group',
        },
        {
          label: 'Pamphlet',
          type: 'radio',
          value: 'pamphlet',
        },
        {
          label: 'Dosage',
          type: 'radio',
          value: 'dosage',
        },
        {
          label: 'Composition',
          type: 'radio',
          value: 'composition',
        },
        {
          label: 'Price',
          type: 'radio',
          value: 'price',
        },
        {
          label: 'ID',
          type: 'radio',
          value: 'id',
        },
      ],
    });

    await alert.present();
  }
  openDrugDetails(drug: Drug) {
    //console.log(drug);
    this.router.navigate(['app/tabs/drugs/drug', drug.id]);
    this.saveDrugToHistory(drug);
  }
  async saveDrugToHistory(drug: Drug) {
    //console.log('save drug to history');
    const history = await this.storage.get('history');
    //console.log(history);
    if (history) {
      const historyDrugs = JSON.parse(history);
      historyDrugs.push(drug);
      await this.storage.set('history', JSON.stringify(historyDrugs));
    } else {
      await this.storage.set('history', JSON.stringify([drug]));
    }
  }

  getDrugImage(id: number) {
    return `${SITE_URL}/assets/imgs5/drugs/${id}.jpg`;
  }
}
