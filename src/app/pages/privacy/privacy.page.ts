import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSplitPane, MenuController } from '@ionic/angular';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  constructor(private app: AppComponent) {}

  ngOnInit() {
    this.app.ionSplitPane.disabled = true;
  }
}
