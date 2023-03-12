import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

type LanguageType = 'en' | 'ar';
type Country = 'Egypt' | 'Kuwait';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  defaultLanguage: LanguageType = 'en';
  defaultCountry: Country = 'Egypt';
  languageChoices = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' },
  ];
  countryChoices = [
    { value: 'Egypt', label: 'Egypt' },
    { value: 'Kuwait', label: 'Kuwait' },
  ];
  defaultColor = 'primary';
  colorChoices = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Medium' },
    { value: 'dark', label: 'Dark' },
  ];
  constructor(private translate:TranslateService,private storage:Storage) {}

  ngOnInit() {
    this.storage.get('defaultLanguage').then((val) => {
      if (val) {
        this.defaultLanguage = val;
      }
    });
    this.storage.get('defaultCountry').then((val) => {
      if (val) {
        this.defaultCountry = val;
      }
    });
    this.storage.get('defaultColor').then((val) => {
      if (val) {
        this.defaultColor = val;
      }
    });
  }
  updateDefaultLanguage(a: any) {
    this.translate.use(this.defaultLanguage);
    this.storage.set('defaultLanguage', this.defaultLanguage);
  }
  waitNextVersion(a: any) {
    console.log('This feature will be available in the next version');
    this.storage.set('defaultCountry', this.defaultCountry);
  }
  changeColor(a: any) {
    console.log(this.defaultColor);
    this.storage.set('defaultColor', this.defaultColor);
  }
  updateDatabase() {
    console.log('This feature will be available in the next version');
  }
  showTutorial() {
    console.log('This feature will be available in the next version');
  }
}
