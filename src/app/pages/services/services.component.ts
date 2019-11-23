import { Component, OnInit } from '@angular/core';
import { SERVICES_CONTENT } from './services-content';
import { FullpageService } from 'src/app/services/fullpage.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { OptionsServicios } from './options-servicios.enum';
import { SlidesServiciosEnum } from './slides-servicios.enum';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  selectedOption;
  contents = SERVICES_CONTENT;
  isMobile= false;

  constructor(public fullpageService: FullpageService,
    public breakpointObserver: BreakpointObserver ) {
    breakpointObserver.observe(['(min-width: 500px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Viewport is 500px or over!');
        if(!this.selectedOption) 
          this.selectedOption = "estudiosProyectos";
        this.isMobile = false;
      } else {
        console.log('Viewport is getting smaller!');
        this.isMobile= true;
        this.selectedOption = undefined;
      }
    });
   }

  ngOnInit() {

  }
  select_option(opt: string){
    console.log(opt)
    this.selectedOption = opt;
    if(this.isMobile){
      if(this.selectedOption == OptionsServicios.estudiosProyectos)
      this.fullpageService.api.moveTo("services", SlidesServiciosEnum.estudiosProyectos);
    else if(this.selectedOption == OptionsServicios.consultoria)
      this.fullpageService.api.moveTo("services", SlidesServiciosEnum.consultoria);
    else if(this.selectedOption == OptionsServicios.coordinacion)
      this.fullpageService.api.moveTo("services", SlidesServiciosEnum.coordinacion);
    else if(this.selectedOption == OptionsServicios.ejecucion)
      this.fullpageService.api.moveTo("services", SlidesServiciosEnum.ejecucion);
    else
      this.fullpageService.api.moveTo("services", SlidesServiciosEnum.servicios);
    }
    console.log("Selected value:", this.selectedOption);
  }


}
