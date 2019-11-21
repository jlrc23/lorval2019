import { Component, OnInit } from '@angular/core';
import { ImageInterface } from 'src/app/interfaces/image.interface';
import { PopupImageComponent } from '../popup-image.component';
import { MatDialog } from '@angular/material/dialog';
 


@Component({
  selector: 'app-simple-gallery',
  templateUrl: './simple-gallery.component.html',
  styleUrls: ['./simple-gallery.component.scss']
})
export class SimpleGalleryComponent implements OnInit {
  basePathImage = "/assets/images/gallery"
  itemsByPages = 5
  totalEjecuciones = 9
  TOTAL_PAGINAS = 0;
  ejecuciones: ImageInterface[] = []
  paginaEjecuciones:ImageInterface[] = []

  pagina = 0;

  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const ejecuciones = {1:6,2:5,3:3,4:6,5:7,6:6,7:2,8:4,9:4};
    const baseNameImage = "image";
    const baseNameFolder = "ejecucion";
    let contadorFotos = 0;
    for(let i = 1; i <= this.totalEjecuciones; i++){
      for(let j=1; j<= ejecuciones[i]; j++){

        this.ejecuciones.push({position: contadorFotos, folder:baseNameFolder+ this.pad(i, 2), image:baseNameImage + this.pad(j, 2) })
        contadorFotos++
      }
    }
    this.TOTAL_PAGINAS = Math.floor(this.ejecuciones.length / this.itemsByPages)-1 ;
    this.loadPage()
  }
  loadPage(){
    this.paginaEjecuciones = []
    const start = this.pagina*this.itemsByPages
    const end  = (this.pagina+1)*this.itemsByPages
    for (let i = start ; i < end; i++)
      this.paginaEjecuciones.push(this.ejecuciones[i])
  }

  nextPage(){
    this.pagina++;
    if(this.pagina > this.TOTAL_PAGINAS )
      this.pagina = 0
    this.loadPage()
  }

  previousPage(){
    this.pagina--;
    if(this.pagina < 0)
      this.pagina  = this.TOTAL_PAGINAS
    this.loadPage()
  }

  imagePath(folder, image){
    return this.basePathImage+ "/" + folder+"/"+image+".png";
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  openImage(ejecucion:ImageInterface){
    const dialogRef = this.dialog.open(PopupImageComponent, {
      width: 'auto',
      data: ejecucion
    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/

  }

}
