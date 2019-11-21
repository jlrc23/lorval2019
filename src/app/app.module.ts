import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MnuAboutUsComponent } from './components/mnu-about-us/mnu-about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { environment } from 'src/environments/environment';
import { SimpleGalleryComponent } from './components/simple-gallery/simple-gallery.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupImageComponent } from './components/popup-image.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { SubpageEstudiosProyectosComponent } from './pages/services/subpages/subpage-estudios-proyectos/subpage-estudios-proyectos.component';
import { SubpageConsultoriaComponent } from './pages/services/subpages/subpage-consultoria/subpage-consultoria.component';
import { SubpageCoordinacionComponent } from './pages/services/subpages/subpage-coordinacion/subpage-coordinacion.component';
import { SubpageEjecucionComponent } from './pages/services/subpages/subpage-ejecucion/subpage-ejecucion.component';
import { SubpageAboutusComponent } from './components/subpage-aboutus/subpage-aboutus.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    MnuAboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    SimpleGalleryComponent,
    PopupImageComponent,
    ClientesComponent,
    SubpageEstudiosProyectosComponent,
    SubpageConsultoriaComponent,
    SubpageCoordinacionComponent,
    SubpageEjecucionComponent,
    SubpageAboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SimpleGalleryComponent, PopupImageComponent]
})
export class AppModule { }
