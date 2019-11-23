import { Component, OnInit, Input } from '@angular/core';
import { OptionsServicios } from 'src/app/pages/services/options-servicios.enum';
import { SERVICES_CONTENT } from 'src/app/pages/services/services-content';
import { FullpageService } from 'src/app/services/fullpage.service';
import { SlidesServiciosEnum } from 'src/app/pages/services/slides-servicios.enum';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-subpage-service',
  templateUrl: './subpage-service.component.html',
  styleUrls: ['./subpage-service.component.scss']
})
export class SubpageServiceComponent implements OnInit {
  @Input() option: OptionsServicios;
  contents = SERVICES_CONTENT;

  constructor(public fullpageService: FullpageService, 
    public breakpointObserver: BreakpointObserver) { }

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
    this.fullpageService.api.moveTo("services", SlidesServiciosEnum.servicios);
  }

}
