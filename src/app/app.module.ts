import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { OFComponent } from './components/of/of.component';
import { FromComponent } from './components/from/from.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { PipePipe } from './pipes/pipe.pipe';
import { CustomePipeComponent } from './components/custome-pipe/custome-pipe.component';
import { FilterComponent } from './components/filter/filter.component';
import { DistinctComponent } from './components/distinct/distinct.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { BooksService } from './services/books.service';
   


@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    OFComponent,
    FromComponent,
    FromEventComponent,
    IntervalComponent,
    DebounceTimeComponent,
    MapComponent,
    PipePipe,
    CustomePipeComponent,
    FilterComponent,
    DistinctComponent,
    ReactiveFormComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
