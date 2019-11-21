import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes = [
    "",
    "fonatur",
    "conapesca",
    "mayapalace",
    "INIFED",
    "inah",
    "",
    "",
    "bancomer",
    "GMX",
    "shuffle",
    "termsa",
    "",
    "",
    "7kat",
    "rubau",
    "liconsa",
    "haltiall"

  ];
  constructor() { }

  ngOnInit() {}

}
