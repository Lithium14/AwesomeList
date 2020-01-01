import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayFormTasksAddComponent } from './workday-form-tasks-add.component';

describe('WorkdayFormTasksAddComponent', () => {
  let component: WorkdayFormTasksAddComponent;
  let fixture: ComponentFixture<WorkdayFormTasksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayFormTasksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayFormTasksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
