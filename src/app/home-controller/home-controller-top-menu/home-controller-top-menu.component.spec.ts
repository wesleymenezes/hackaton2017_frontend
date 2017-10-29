import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeControllerTopMenuComponent } from './home-controller-top-menu.component';

describe('HomeControllerTopMenuComponent', () => {
  let component: HomeControllerTopMenuComponent;
  let fixture: ComponentFixture<HomeControllerTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeControllerTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeControllerTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
