import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseChartDirective } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    BaseChartDirective,
  ]
})
export class ComponentsModule { }
