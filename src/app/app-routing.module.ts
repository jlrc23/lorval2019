import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {LandingComponent} from './pages/landing/landing.component';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {ClientesComponent} from './pages/clientes/clientes.component';

const routes: Routes = []; /*[
  {path:"aboutUs", component: AboutUsComponent},
  {path: "landing", component: LandingComponent},
  {path: "home", component: HomeComponent},
  {path: "services", component:ServicesComponent},
  {path: "contactUs", component:ContactUsComponent},
  {path: "clientes", component: ClientesComponent}
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],//{useHash: true} 
  exports: [RouterModule]
})
export class AppRoutingModule { }
