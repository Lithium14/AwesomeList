import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayFormTasksItemComponent } from './workday-form-tasks-item.component';

describe('WorkdayFormTasksItemComponent', () => {
  let component: WorkdayFormTasksItemComponent;
  let fixture: ComponentFixture<WorkdayFormTasksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayFormTasksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayFormTasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
