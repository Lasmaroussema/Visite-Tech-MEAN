import { Component } from '@angular/core';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RDV } from '../RDV';


@Component({
  selector: 'app-rdv-date',
  templateUrl: './rdv-date.component.html',
  styleUrls: ['./rdv-date.component.css'],

})
export class RdvDateComponent {

  DateError: boolean = false;
  ShowTime: boolean = false;
  date: string = '';
  heure: string = '';

  constructor(private router:Router){}

  getDate(event: MatDatepickerInputEvent<Date>) {
    
    if (event.value?.getDay() == 0) {
      this.DateError = true;
    }
    else
    {
      this.DateError = false;
      }
  }

  GoToPayment()
  {
    
    RDV.details[6][1] = this.date;
    RDV.details[7][1] = this.heure;
    this.router.navigate(['/service']);
  }
}
