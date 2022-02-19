import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre : string = 'Susana';
  genero : string = 'femenino';



  invitacionMap = {
    'femenino' : 'Invitarla',
    'masculino' : 'invitarlo'
  }

  cambiarNombre(){

    if(this.genero === 'femenino'){
        this.nombre = 'gabriel';
        this.genero = 'masculino';
    }else{
      this.nombre = 'Susana';
      this.genero = 'femenino';

    }
  }


  //i18nPrural

  clientes : string[] = ['maria', 'gabriel', 'Andres', 'camila', 'Julio'];

  pluralCliente = {
    '=0' : ' no se encuentran clientes' ,
    '=1' : 'tenemos un cliente',
    'other' : 'tenemos # clientes'
  }


  eliminarNombre(){
    this.clientes.shift();
  }

  persona = {
    nombre : 'Gabriel',
    edad : 35 ,
    direccion : 'Cartagena, colombia'
  }

  heroes  = [
    {
      "nombre" : 'superman',
      "vuela" : true
    },
    {
      "nombre" : 'spiderman',
      "vuela" : true
    },
    {
      "nombre" : 'acuaman',
      "vuela" : false
    }
  ];


  miObservable = interval(1000);



  valorPromesa = new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve('Tenemos data de Promesa');
      }, 3500);
  });




}


