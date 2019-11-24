import {Component, OnInit, ViewChild} from '@angular/core';
import {MnuAboutUsComponent} from '../../components/mnu-about-us/mnu-about-us.component';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {ABOUT_US_CONTENT} from './aboutus-content';
import {OptionsAboutUs} from '../../components/mnu-about-us/options-about-us.enum';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  @ViewChild(MnuAboutUsComponent) mnuAboutUs: MnuAboutUsComponent;
  selectedOption: string;
  content = ABOUT_US_CONTENT;


  constructor() {
    /*breakpointObserver.observe(['(max-width: 500px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Viewport is 500px or over!');
        this.mnuAboutUs.selectOption(OptionsAboutUs.mision);
      } else {
        console.log('Viewport is getting smaller!');
      }
    });*/
  }

  ngOnInit() {


  }
  menuSelect($event: OptionsAboutUs) {
    console.log(`{menuSelect}`, $event);
    this.selectedOption = $event;
  }



}
