import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  frmContacto: FormGroup
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      solicitud: ['', Validators.required]
    })
  }

  enviarFormulario(){
    console.log("Contacto:", this.frmContacto.value)
    this.frmContacto.reset()
  }

}
