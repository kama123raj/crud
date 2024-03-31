import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
 import { BooksService } from './services/books.service';
import { LetVatConstComponent } from './components/ngZOne/let-vat-const.component';
import { ScssComponent } from './components/scss/scss.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AuthService } from './services/auth.service';
import { GloErrorHandler } from './services/error-handler.service';
import { ApiInterceptor } from './services/api.interceptor';
import { AngularTackbyComponent } from './components/angular-tackby/angular-tackby.component';
import { InputFocusDirective } from './directive/input-focus.directive';
import { SkipComponent } from './components/skip/skip.component';
import { TakeComponent } from './components/take/take.component';
import { TaskService } from './services/task.service';
  
  


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
    LetVatConstComponent,
    ScssComponent,
    ReactiveFormComponent,
    AngularTackbyComponent,
    InputFocusDirective,
    SkipComponent,
    TakeComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     

  ],
  providers:[{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},BooksService, AuthService, TaskService, {provide:ErrorHandler, useClass:GloErrorHandler}, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
