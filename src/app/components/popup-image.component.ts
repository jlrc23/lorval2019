import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageInterface } from 'src/app/interfaces/image.interface';

@Component({
  selector: 'app-popup-image',
  templateUrl: './popup-image.component.html',
  styles: []
})
export class PopupImageComponent implements OnInit {
  basePathImage = "/assets/images/gallery";
  image: ImageInterface;

  constructor(public dialogRef: MatDialogRef<PopupImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageInterface) {
      this.image = data;
     }

  ngOnInit() {

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
  path_image(){
    return this.basePathImage+ "/" + this.image.folder+"/"+this.image.image+".png";

  }

}
