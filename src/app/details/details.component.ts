import { Component, OnInit } from '@angular/core';
import { RDV } from '../RDV';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  rdv: any;

  ngOnInit(): void {
    this.rdv = RDV.details;
  }

}
