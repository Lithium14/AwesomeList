import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWorkdayListComponent } from './planning-workday-list.component';

describe('PlanningWorkdayListComponent', () => {
  let component: PlanningWorkdayListComponent;
  let fixture: ComponentFixture<PlanningWorkdayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningWorkdayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningWorkdayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
