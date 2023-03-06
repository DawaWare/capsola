import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Route,
  Router,
} from '@angular/router';
import { DrugsService } from 'src/app/services/drugs.service';
import { SITE_URL } from '../../global';
import {
  Drug,
  SearchableKeys,
  SearchType,
  SegmentType,
} from '../tabs/home/home.page';

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
  constructor(
    public route: ActivatedRoute,
    private drugsService: DrugsService,
    private router: Router
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
  prepareUI() {
    this.loading = false;
    console.log(this.drug);
    this.activeingredients = this.drug.activeingredient.split('+');
    this.loadDrugSimilars().then((drugs) => {
      this.similars = drugs;
      console.log('similars', this.similars);
    });
    console.log(this.activeingredients);
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
    this.router.navigate(['/home'], navigationExtras);
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
    return `${SITE_URL}/assets/imgs/drugs/${id - 1 > -1 ? id : 0}.jpg`;
  }
}
