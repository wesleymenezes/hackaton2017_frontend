import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePoolControllerComponent } from './home-pool-controller.component';

describe('HomePoolControllerComponent', () => {
  let component: HomePoolControllerComponent;
  let fixture: ComponentFixture<HomePoolControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePoolControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePoolControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
