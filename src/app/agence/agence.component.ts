import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RDV } from '../RDV';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {

  mode = 0;
  change: boolean=false;
  location: string = "";
  agenceSelected = false;
  a!: string;
  b!: string;
  services: string="";
  Horaire: string = "De 8:00 à 13:40 \nDu Lundi au Samedi";
  TypeService: string[] = ["Identification","Visite Technique : Véhicules légers","Visite Technique : Véhicules légers et lourds"];
  countries = [["Sijoumi (Véhicules légers)", "Sidi Hassine -Route El Fahs"],
    ["Ariana","Cité El Bokri"],
    ["Sfax","Rue Okba Ibn Nafaa "],
    ["Ben Arous","Rue la monnaie Z.Indus 2013"],
    ["Sousse","Route Monastir Zone Indus 4000"],
    ["Sakiet Ezzit","Route Tunis KM 12"],
    ["Sijoumi (Véhicules lourds)","Sidi Hassine Sijoumi"],
    ["Nabeul","Rue Mongi Bali 8000"],
    ["Monastir","Route Khniss"],
    ["Bizerte","Route Parc A -Sekma 7071"],
    ["Bir El Kasaa","Zone Industruelle"],
    ["Kairouan","Route El Baten- Zone Industrielle"],
    ["Gabes","Route Tunis -Bou Chemma"],
    ["Djerba","Essouani - Houmet Souk 4180"],
    ["Mahdia","Route Ali Balhouen"],
    ["Mednine","Route Ben Guerdan"],
    ["Zaghouan","Zone Industrielle 1100"],
    ["Jendouba","Route Ain Draham"]];
  

  
  constructor(private router:Router){}
  
  ngOnInit(): void {
    this.getLocalisation();
  }

  

  getLocalisation()
  {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position) => {
           fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
               .then(response => response.json())
             .then(data => {
               this.location = data.address.country;
              
              });
       });
    }
  }


  show(s: string)
  {
    
  }

  ShowInfo(a: string, b: string)
  {
    this.a = a;
    this.b = b;
    this.agenceSelected = true;
  }

  GoTODate()
  {
    RDV.details[3][1] =this.a;
    RDV.details[4][1] =this.b;
    RDV.details[5][1] =this.services;
    this.router.navigate(['/rdvdate']);
  }
  showChange()
  {
    console.log("changed" + this.change);
  }

  add1()
  {
    this.services += "Diagnostic technique/ ";
  }
  add2()
  {
    this.services += "Reglage technique/ ";
  }
  add3()
  {
    this.services += "Entretien Préventif/ ";
  }

}
