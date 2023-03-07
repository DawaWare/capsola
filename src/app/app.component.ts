import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { StatusBar, Style, StyleOptions } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { AnalyticsService } from './services/analytics.service';
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
  constructor(private storage: StorageService) {
    this.storage.create();

    const firebaseConfig = {
      apiKey: 'AIzaSyA7hINvfwNIewY8ct0g7vHR-EDLUau1pRw',
      authDomain: 'dawaware2023.firebaseapp.com',
      projectId: 'dawaware2023',
      storageBucket: 'dawaware2023.appspot.com',
      messagingSenderId: '969815971044',
      appId: '1:969815971044:web:9e3335c1f1b099a2f008f1',
      measurementId: 'G-32XBSGXCKY',
    };
    FirebaseAnalytics.initializeFirebase(firebaseConfig);

    try {
      const style = getComputedStyle(document.body);
      const primaryColor = style.getPropertyValue('--ion-color-primary');
      StatusBar.setBackgroundColor({ color: primaryColor.trim() }).catch(
        (err) => {
          console.log("Couldn't set status bar color");
        }
      );
    } catch (e) {
      console.log("Couldn't set status bar color");
    }
  }
}
