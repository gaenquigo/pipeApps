import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

//Modulo Personalizado primeNG
import {NgPrimeModule} from './ng-prime/ng-prime.module'
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el locale  - fecha

import  localeES  from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeES);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    NgPrimeModule,
    VentasModule

    
  ],
  providers: [
    {
      provide : LOCALE_ID, useValue: 'es-CO'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
