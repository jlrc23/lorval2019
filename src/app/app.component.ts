import { Component } from '@angular/core';
import {FullpageService} from './services/fullpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;

  constructor(public fullpageService: FullpageService) {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'F0C98BD8-1E5C4649-89CD41BD-6DB81FC1',
      anchors: ['landing', 'home', 'aboutUs', 'services',  'clientes', 'contactUs'],
      menu: '#menu',
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      controlArrows: false,
      afterLoad: (origin, destination, direction) => {
        if(origin){
          console.log(origin.index);
        }
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpageService.api = fullPageRef;
  }
}
