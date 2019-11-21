import {Component, Input, OnInit} from '@angular/core';
import {ABOUT_US_CONTENT} from '../../pages/about-us/aboutus-content';
import {OptionsAboutUs} from '../mnu-about-us/options-about-us.enum';
import {FullpageService} from '../../services/fullpage.service';
import {SlidesAboutUsEnum} from '../mnu-about-us/slides-about-us.enum';

@Component({
  selector: 'app-subpage-aboutus',
  templateUrl: './subpage-aboutus.component.html',
  styleUrls: ['./subpage-aboutus.component.scss']
})
export class SubpageAboutusComponent implements OnInit {
  @Input() option: OptionsAboutUs;

  contents = ABOUT_US_CONTENT;

  constructor( public fullpageService: FullpageService,) { }

  ngOnInit() {
  }
  get title() {
    if (!this.option) { return; }
    return this.contents[this.option].title;
  }

  get content() {
    if (!this.option) { return; }
    return this.contents[this.option].content;
  }

  goBack(){
    this.fullpageService.api.moveTo("aboutUs", SlidesAboutUsEnum.aboutUs);
  }

}
