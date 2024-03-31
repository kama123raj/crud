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

const routes: Routes = [
 {
  path:'', component:RxjsLearningComponent
 },
 {
  path:'of', component:OFComponent
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

 


//  Pipe 
 {
  path:'custome-pipe', component:CustomePipeComponent
 },
 {
  path:'reactive-form', component:ReactiveFormComponent
 },

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
