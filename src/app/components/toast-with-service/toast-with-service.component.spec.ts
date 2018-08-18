import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastWithServiceComponent } from './toast-with-service.component';

describe('ToastWithServiceComponent', () => {
  let component: ToastWithServiceComponent;
  let fixture: ComponentFixture<ToastWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
