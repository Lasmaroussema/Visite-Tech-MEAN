import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  change(div: HTMLDivElement)
  {
    div.style.border = '1px solid black';
  }
  
}
