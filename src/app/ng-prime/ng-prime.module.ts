import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PRIME NG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    RippleModule,
    TableModule,
    ToolbarModule

  ]
})
export class NgPrimeModule { }
