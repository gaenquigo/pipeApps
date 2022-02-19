import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  esMayuscula : boolean = false;
  ordernarPor : string = '';

  heroes : Heroe[] = [
    {
      nombre : 'superman',
      vuela  : true,
      color  : Color.azul
    },
    {
      nombre : 'batman',
      vuela  : false,
      color   : Color.negro
    },
    {
      nombre : 'robin',
      vuela  : false,
      color : Color.rojo
    },
    {
      nombre : 'linterna verde',
      vuela : true,
      color : Color.verde
    }

  ]


  cambiarMayuscula(){

   if(this.esMayuscula === true){
     this.esMayuscula = false;
   }else{
     this.esMayuscula = true;
   }
  }

  ordenar(valor : string){
    this.ordernarPor = valor;
  }

}
