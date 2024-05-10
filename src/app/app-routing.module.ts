import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { AuthComponent } from './auth/auth.component';
import { AgenceComponent } from './agence/agence.component';
import { RdvDateComponent } from './rdv-date/rdv-date.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'sign',component:SignComponent},
  {path:'auth',component:AuthComponent},
  {path:'agence',component:AgenceComponent},
  {path:'rdvdate',component:RdvDateComponent},
  { path: 'service', component: ServiceComponent },
  { path: '**', redirectTo:'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
