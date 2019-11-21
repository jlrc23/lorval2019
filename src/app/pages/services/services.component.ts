import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  selectedOption="estudiosProyectos"

  constructor() { }

  ngOnInit() {

  }
  select_option(opt: string){
    console.log(opt)
    this.selectedOption = opt;
    console.log("Selected value:", this.selectedOption);
  }


}
