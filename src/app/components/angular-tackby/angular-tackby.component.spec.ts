import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTackbyComponent } from './angular-tackby.component';

describe('AngularTackbyComponent', () => {
  let component: AngularTackbyComponent;
  let fixture: ComponentFixture<AngularTackbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTackbyComponent]
    });
    fixture = TestBed.createComponent(AngularTackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
