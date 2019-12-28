import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWorkdayItemComponent } from './planning-workday-item.component';

describe('PlanningWorkdayItemComponent', () => {
  let component: PlanningWorkdayItemComponent;
  let fixture: ComponentFixture<PlanningWorkdayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningWorkdayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningWorkdayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
