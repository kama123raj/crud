import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
 
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path:'', component:OperatorsComponent,
    children: [
      {
        path: 'transformation',
        component: CreationOperatorsComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
