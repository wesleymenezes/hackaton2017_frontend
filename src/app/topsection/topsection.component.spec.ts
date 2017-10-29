import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionComponent } from './topsection.component';

describe('TopSectionComponent', () => {
  let component: TopSectionComponent;
  let fixture: ComponentFixture<TopSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});