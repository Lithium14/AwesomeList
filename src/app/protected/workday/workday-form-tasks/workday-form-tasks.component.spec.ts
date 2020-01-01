import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayFormTasksComponent } from './workday-form-tasks.component';

describe('WorkdayFormTasksComponent', () => {
  let component: WorkdayFormTasksComponent;
  let fixture: ComponentFixture<WorkdayFormTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayFormTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayFormTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
