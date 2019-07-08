import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'F0C98BD8-1E5C4649-89CD41BD-6DB81FC1',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        if(origin){
          console.log(origin.index);
        }
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
