import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import Swiper from 'swiper';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  showSkip = true;
  private slides!: Swiper;
  constructor(public platform:Platform,public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }
  startApp() {
    this.router
      .navigateByUrl('/app/tabs/drugs', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  setSwiperInstance(swiper: Swiper) {
    this.slides = swiper;
  }

  onSlideChangeStart() {
    this.showSkip = !this.slides.isEnd;
    this.cd.detectChanges();
  }

  ionViewWillEnter() {
    if(this.platform.is('capacitor')){
      this.storage.get('ion_did_tutorial').then((res:string) => {
        if (res) {
          this.router.navigateByUrl('/app/tabs/drugs', { replaceUrl: true });
        }
      });
    }else{
      //go to landing page
      this.router.navigateByUrl('/landing', { replaceUrl: true });
    }


    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
