import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import * as $ from 'jquery';

import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {

  constructor(private app:AppComponent,private script:ScriptService) { }

  ngOnInit() {
    //this.app.ionSplitPane.disabled = true;
    console.log('I am here');
    window.location.href = '/landing/index.html';

  }
  ngAfterViewInit(){
  }



}
