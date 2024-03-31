import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { OFComponent } from './components/of/of.component';
import { FromComponent } from './components/from/from.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { MapComponent } from './components/map/map.component';
import { CustomePipeComponent } from './components/custome-pipe/custome-pipe.component';
import { FilterComponent } from './components/filter/filter.component';
import { DistinctComponent } from './components/distinct/distinct.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LetVatConstComponent } from './components/ngZOne/let-vat-const.component';
import { ScssComponent } from './components/scss/scss.component';
import { AngularTackbyComponent } from './components/angular-tackby/angular-tackby.component';
import { SkipComponent } from './components/skip/skip.component';
import { TakeComponent } from './components/take/take.component';

const routes: Routes = [
 {
  path:'', component:RxjsLearningComponent,
  data: {
    fullPage:false
  }
 },
 {
  path:'operators',  loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule)
 },
 {
  path:'of', component:OFComponent,
  data: {
    fullPage:true
  }
 },
 {
  path:'from', component:FromComponent
 },
 {
  path:'fromEvent', component:FromEventComponent
 },
 {
  path:'interval', component:IntervalComponent
 },
 {
  path:'debounceTime', component:DebounceTimeComponent
 },
 {
  path:'map', component:MapComponent
 },
 {
  path:'filter', component:FilterComponent
 },
 {
  path:'distinct', component:DistinctComponent
 },
 {
  path:'trackBy', component:AngularTackbyComponent
 },
 {
path:'chnage-Detection', component:ScssComponent
 },
 {
  path:'skip', component:SkipComponent
  },
  {
    path:'take', component:TakeComponent
    },


//  Pipe 
 {
  path:'custome-pipe', component:CustomePipeComponent
 },
 {
  path:'reactive-form', component:ReactiveFormComponent
 },
 {
  path:'ngZone', component:LetVatConstComponent
 },
  {
  path:'scss', component:ScssComponent
 },
 {
  path: 'crud',
  loadChildren: () => import('./module/crud/crud.module').then(m => m.CrudModule)
},
 {
  path: 'auth',
  loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
