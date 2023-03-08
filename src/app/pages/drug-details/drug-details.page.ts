import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Route,
  Router,
} from '@angular/router';
import { IonInput } from '@ionic/angular';
import { SITE_URL } from '../../global';
import { AnalyticsService } from '../../services/analytics.service';
import { DrugsService } from '../../services/drugs.service';
import { StorageService } from '../../services/storage.service';
import {
  Drug,
  SearchableKeys,
  SearchType,
  SegmentType,
} from '../tabs/home/home.page';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.page.html',
  styleUrls: ['./drug-details.page.scss'],
})
export class DrugDetailsPage implements OnInit {
  drugId: number = 0;
  drugs: Drug[] = [];
  drug: Drug = {
    id: 0,
    tradename: '',
    activeingredient: '',
    price: '',
    company: '',
    group: '',
    pamphlet: '',
    dosage: '',
    composition: '',
  };
  loading: boolean = true;
  activeingredients: string[] = [];
  showPharma = false;
  similars: Drug[] = [];
  newPrice: string = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  constructor(
    public route: ActivatedRoute,
    private drugsService: DrugsService,
    private router: Router,
    private analytics: AnalyticsService,
    private storage: StorageService
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.drugId = Number(paramMap.get('id'));
    });
  }

  ngOnInit() {
    if (this.drugs.length) {
      this.drugs = this.drugsService.drugs$.getValue();
      this.drug = this.drugs.find((drug) => drug.id === this.drugId)!;
      this.prepareUI();
    } else {
      this.drugsService.drugs$.subscribe((drugs) => {
        this.drugs = drugs;
        this.drug = this.drugs.find((drug) => drug.id === this.drugId)!;
        this.prepareUI();
      });
    }
  }

  getClipboardAndUpdatePrice() {
    Clipboard.read().then((data) => {
      console.log(data);
      this.updatePrice(data.value);
    });
  }

  prepareUI() {
    this.analytics.setSecreenName(this.drugId.toString());
    this.analytics.logEvent('screen_view', {
      screen_name: this.drug.tradename,
    });

    this.activeingredients = this.drug.activeingredient.split('+');
    this.loadDrugSimilars().then((drugs) => {
      this.similars = drugs;
      this.loading = false;
    });

    const checkKey = async (e: any) => {
      e = e || window.event;

      if (e.keyCode == '38') {
        // up arrow
      } else if (e.keyCode == '40') {
        // down arrow
        await Clipboard.write({
          string: this.drug.tradename,
        });
      } else if (e.keyCode == '37') {
        // left arrow
        //go to the previous drug
        this.router.navigate(['/app/tabs/drugs/drug', this.drug.id - 1], {
          replaceUrl: true,
        });
      } else if (e.keyCode == '39') {
        // right arrow
        //go to the next drug
        this.router.navigate(['/app/tabs/drugs/drug', this.drug.id + 1], {
          replaceUrl: true,
        });
      }
    };
    document.onkeydown = checkKey;
  }
  searchActiveIngredient(item: string) {
    const searchKey: SearchableKeys = 'activeingredient';
    const searchType: SearchType = 'exact';
    const searchTerm: string = item;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey,
        searchType,
        searchTerm,
      },
    };
    this.router.navigate(['/app/tabs/drugs'], navigationExtras);
  }
  viewDrugGroup() {
    console.log(this.drug.group);
  }
  viewCompanyProducts() {
    const searchKey: SearchableKeys = 'company';
    const searchType: SearchType = 'exact';
    const searchTerm: string = this.drug.company;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey,
        searchType,
        searchTerm,
      },
    };
    this.router.navigate(['/app/tabs/drugs/'], navigationExtras);
  }
  togglePharma() {
    this.showPharma = !this.showPharma;
  }
  openDrug(drug: Drug) {
    this.router.navigateByUrl(`/app/tabs/drugs/${drug.id}`);
  }

  //view drug picture externally
  viewPicture() {
    this.openLinkSystemBrowser(
      `https://www.google.com/search?tbm=isch&q=${this.drug.tradename
        .split(' ')
        .slice(0, 2)
        .join(' ')} drug`
    );
  }

  //google more about drug externally
  googleMore() {
    this.openLinkSystemBrowser(
      `https://www.google.com/search?&q=${this.drug.tradename
        .split(' ')
        .slice(0, 2)
        .join(' ')} drug`
    );
  }

  //in app browser open link is system browser
  openLinkSystemBrowser(link: string) {
    window.open(link, '_system');
  }
  loadDrugSimilars(): Promise<Drug[]> {
    let similarDrugs: Drug[] = [];
    //function to push similar drugs to class similars array
    const pushSimilars = () => {
      //loop to find which have the save ingredienets;
      for (let i = 0; i < this.drugs.length; i++) {
        if (this.drug.activeingredient === this.drugs[i].activeingredient) {
          //push if similar -> similar has the same active ingredient
          similarDrugs.push(this.drugs[i]);
        }
      }
    };

    const quickRank = (drugs: Drug[]) => {
      const lowestPrice = (a: Drug, b: Drug) =>
        Number(a.price) - Number(b.price);
      return drugs.sort(lowestPrice);
    };

    //method returns promise of similar drugs...
    return new Promise((resolve, reject) => {
      //we have data already loaded
      //usually we have it when we use direct link
      if (this.drugs.length) {
        pushSimilars();
        quickRank(similarDrugs);
      } else {
        //coming from navigation page
        //load the drugs to pick similar
        //current data is limited to data coming from nav object
        this.drugsService.drugs$.subscribe((result: Drug[]) => {
          this.drugs = result;
          pushSimilars();
          quickRank(similarDrugs);
        });
      }

      resolve(similarDrugs);
    });
  }
  getDrugImage(id: number) {
    return `${SITE_URL}/assets/imgs/drugs/${id - 1 > -1 ? id - 1 : 0}.jpg`;
  }

  updatePrice(value: string) {
    this.drug.newPrice = value;
    this.storage.get('drugs').then((data: string) => {
      const drugs = JSON.parse(data) as Drug[];
      for (let i = 0; i < drugs.length; i++) {
        if (drugs[i].id === this.drug.id) {
          drugs[i]['newPrice'] = value;
        }
      }
      this.storage.set('drugs', JSON.stringify(drugs));
    });
  }
  async downloadData() {
    let textFile: any = null;
    const makeTextFile = function (text: any) {
      var data = new Blob([JSON.parse(text)], { type: 'text/json' });
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
      textFile = window.URL.createObjectURL(data);
      // returns a URL you can use as a href
      return textFile;
    };
    const link = document.createElement('a');
    link.setAttribute('download', `drugs${this.drug.id}.json`);
    this.storage.get('drugs').then((drugs) => {
      link.href = makeTextFile(JSON.stringify(drugs, null, 2));
      document.body.appendChild(link);

      // wait for the link to be added to the document
      window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
      });
    });
  }
  copyTradename() {
    document.execCommand('copy');
  }
}
