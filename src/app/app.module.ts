import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { AuthComponent } from './auth/auth.component';
import { ServiceComponent } from './service/service.component';
import { AgenceComponent } from './agence/agence.component';
import { RdvDateComponent } from './rdv-date/rdv-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    AuthComponent,
    ServiceComponent,
    AgenceComponent,
    RdvDateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatStepperModule,
    CdkStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
