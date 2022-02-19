import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor() { }

  nombreUpper : string = 'GABRIEL';
  nombreLower : string = 'gabriel';
  nombreCompleto : string = 'GaBriel quintanA';



  fecha : Date =  new Date();


}
