import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstanceControllerPanelComponent } from './home-instance-controller-panel.component';

describe('HomeInstanceControllerPanelComponent', () => {
  let component: HomeInstanceControllerPanelComponent;
  let fixture: ComponentFixture<HomeInstanceControllerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInstanceControllerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstanceControllerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
