import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayFormDateComponent } from './workday-form-date.component';

describe('WorkdayFormDateComponent', () => {
  let component: WorkdayFormDateComponent;
  let fixture: ComponentFixture<WorkdayFormDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayFormDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayFormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
