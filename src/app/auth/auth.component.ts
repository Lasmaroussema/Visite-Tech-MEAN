import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RDV } from '../RDV';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  phone: string = "";
  region: string = "";
  emptyInput: boolean = false;
  nextStep: boolean = false;


  constructor(private router:Router){}

  ReadPhoneNum()
  {
    if (this.region=="" || this.phone=="")
    {
      this.emptyInput = true;
      return;
    }

    console.log(this.region + this.phone);
    this.nextStep = true;
  }

  GoToAgence()
  {
    RDV.details[2][1] = this.region + ' ' + this.phone;
    this.router.navigate(['/agence']);
  }
}
