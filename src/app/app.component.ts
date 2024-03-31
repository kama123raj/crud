import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { ApiCallService } from './services/api-call.service';
import { TaskService } from './services/task.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zuper';

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private apiService: ApiCallService,
    private task: TaskService
  ) {}

  mark: any;
  currentItem = 1;
  urls = ['https://dummyjson.com/products', 'https://dummyjson.com/products/2'];

  taskUrl: string = environment.task;

  pagedata: any;

  ngOnInit() {
    this.task.getdata(this.taskUrl).subscribe({
      next: (data: any) => {
        this.pagedata = data;
        console.log(this.pagedata, 'taskdata');
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  sentChild(element: any) {
    this.currentItem++;
    this.mark = element;
    console.log(element);
  }
  marks() {
    this.mark++;
    const fullPage = this.activated.data.subscribe((data) => data);
    console.log(fullPage);
  }

  //  task

  counter: number = 1;
  leftButton: boolean = true;
  rightButton: boolean = false;

  increment(): void {
    this.leftButton = false;
    this.counter++;
    if (this.counter <= 4) {
      this.rightButton = false;
    } else {
      this.rightButton = true;
    }
  }
  decrement(): void {
    this.rightButton = false;
    this.counter--;
    if (this.counter > 1) {
      this.leftButton = false;
    } else {
      this.leftButton = true;
    }
  }

  autoCounterNumber: number = 0;

  running: any;

  autoCounter(): void {
    this.running = setInterval(() => {
      this.autoCounterNumber++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.running);
  }
}
