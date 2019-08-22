import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnu-about-us',
  templateUrl: './mnu-about-us.component.html',
  styleUrls: ['./mnu-about-us.component.scss']
})
export class MnuAboutUsComponent implements OnInit {
  @Output('selected') selected: EventEmitter<string> = new EventEmitter<string>();

  itemSelected;

  constructor() { }

  ngOnInit() {
  }
  selectOption(option){
    this.selected.emit(option);
    this.itemSelected=option;
  }

}
