import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RDV } from '../RDV';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  
  CarType: string = 'TS';
  seletedvalue: string = "";
  @ViewChild("serie") serie!: ElementRef;
  @ViewChild("num") num!: ElementRef;
  @ViewChild("chassis") chassis!: ElementRef;
  
  constructor(private router:Router){}

  showOption()
  {
    console.log(this.seletedvalue);
  }

  GoToAuth()
  {
    RDV.details[0][1] = this.serie.nativeElement.value+" TUN "+this.num.nativeElement.value;
    RDV.details[1][1] = this.chassis.nativeElement.value;
    this.router.navigate(['/auth']);
  }
}
