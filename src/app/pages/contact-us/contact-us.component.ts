import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  frmContacto: FormGroup;
  fecha: number;
  statusMessage: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.fecha = new Date().getTime();
    this.frmContacto = this.formBuilder.group({
      fecha: [this.fecha, Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      solicitud: ['', Validators.required]
    })
  }

  enviarFormulario(){
    console.log("Contacto:", this.frmContacto.value);
    const result = this.db.collection("contactos")
                      .add(this.frmContacto.value)
                      .then((result)=>{
                        console.log("Added success", result);
                        this.frmContacto.reset()
                        this._snackBar.open("Enviado con éxito", "cerrar", {
                          duration: 2000,
                        });
                      }) 
                      .catch(error=>{
                        console.error(error)
                        this.statusMessage = "Ocurrio un error"
                        this._snackBar.open("Ocurrio un error", "cerrar", {
                          duration: 2000,
                        });
                      });
    
  }

}
