import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSystemControllerComponent } from './home-system-controller.component';

describe('HomeSystemControllerComponent', () => {
  let component: HomeSystemControllerComponent;
  let fixture: ComponentFixture<HomeSystemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSystemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSystemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
