import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayFormNotesComponent } from './workday-form-notes.component';

describe('WorkdayFormNotesComponent', () => {
  let component: WorkdayFormNotesComponent;
  let fixture: ComponentFixture<WorkdayFormNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayFormNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayFormNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
