import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
  updateDefaultLanguage(a: any) {
    console.log(this.defaultLanguage);
  }
  waitNextVersion(a: any) {
    console.log('This feature will be available in the next version');
  }
  changeColor(a: any) {
    console.log(this.defaultColor);
  }
  updateDatabase() {
    console.log('This feature will be available in the next version');
  }
  showTutorial() {
    console.log('This feature will be available in the next version');
  }
}
