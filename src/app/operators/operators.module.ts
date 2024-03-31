import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
 import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    CreationOperatorsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    RouterModule
  ]
})
export class OperatorsModule { }
