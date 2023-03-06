import { Component } from '@angular/core';
import { StatusBar, Style, StyleOptions } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
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
  constructor(private platform: Platform, private storage: StorageService) {
    this.storage.create();
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
