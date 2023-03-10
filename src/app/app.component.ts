import { Component, ViewChild } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { StatusBar, Style, StyleOptions } from '@capacitor/status-bar';
import { IonSplitPane, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AnalyticsService } from './services/analytics.service';
import { DrugsService } from './services/drugs.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [
    {
      title: 'Drug Search',
      url: '/app/tabs/drugs',
      icon: 'search',
    },
    {
      title: 'Drug Interactions',
      url: '/app/tabs/interactions',
      icon: 'medkit',
    },
    {
      title: 'Settings',
      url: '/app/tabs/settings',
      icon: 'settings',
    },
  ];
  @ViewChild('ionSplitPane') ionSplitPane!: IonSplitPane;

  constructor(private storage: StorageService,private drugsService:DrugsService) {


    const firebaseConfig = {
      apiKey: "AIzaSyC0nT5hUa6w3QEYIULMcufNBrxTmmCuAtk",
      authDomain: "capsola2023.firebaseapp.com",
      projectId: "capsola2023",
      storageBucket: "capsola2023.appspot.com",
      messagingSenderId: "315458350239",
      appId: "1:315458350239:web:4aba654b53b9fbb64686aa",
      measurementId: "G-J24VF5NY8Y"
    };
    FirebaseAnalytics.initializeFirebase(firebaseConfig);

    try {
      const style = getComputedStyle(document.body);
      const primaryColor = style.getPropertyValue('--ion-color-primary');
      StatusBar.setBackgroundColor({ color: primaryColor.trim() }).catch(
        (err) => {
          //console.log("Couldn't set status bar color");
        }
      );
    } catch (e) {
      //console.log("Couldn't set status bar color");
    }
  }

  async ngOnInit() {
    await this.storage.create();
    await this.drugsService.checkForUpdate();
  }
}
