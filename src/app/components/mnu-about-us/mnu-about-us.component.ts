import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {FullpageService} from '../../services/fullpage.service';
import {SlidesAboutUsEnum} from './slides-about-us.enum';
import {OptionsAboutUs} from './options-about-us.enum';
import {OptionSelectedService} from './option-selected.service';

@Component({
  selector: 'mnu-about-us',
  templateUrl: './mnu-about-us.component.html',
  styleUrls: ['./mnu-about-us.component.scss']
})
export class MnuAboutUsComponent implements OnInit {
  @Output('selected') selected: EventEmitter<string> = new EventEmitter<string>();
  enableSlide = false;



  constructor(public breakpointObserver: BreakpointObserver,
              public fullpageService: FullpageService,
              public optionSelectedService: OptionSelectedService) {
    breakpointObserver.observe(['(max-width: 500px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Viewport is 500px or over!');
        this.enableSlide = true;
      } else {
        this.enableSlide = false;
      }
    });
  }

  ngOnInit() {
  }

  selectOption(option: OptionsAboutUs) {
    this.selected.emit(option);
    this.optionSelectedService.itemSelected = option;
    if (this.enableSlide){
      this.selectSlide(option);
    }

  }

  selectSlide(selectedOption: OptionsAboutUs){
    if(selectedOption == OptionsAboutUs.mision)
      this.fullpageService.api.moveTo("aboutUs", SlidesAboutUsEnum.mision);
    else if(selectedOption == OptionsAboutUs.vision)
      this.fullpageService.api.moveTo("aboutUs", SlidesAboutUsEnum.vision);
    else if(selectedOption == OptionsAboutUs.politica)
      this.fullpageService.api.moveTo("aboutUs", SlidesAboutUsEnum.politica);
    else
      this.fullpageService.api.moveTo("aboutUs", SlidesAboutUsEnum.aboutUs);
  }

}
