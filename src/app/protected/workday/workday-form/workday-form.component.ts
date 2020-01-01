import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workday-form',
  templateUrl: './workday-form.component.html',
  styleUrls: ['./workday-form.component.scss']
})
export class WorkdayFormComponent implements OnInit {

  workdayForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.workdayForm = this.createWorkdayForm();
  }

  get dueDate() {
    return this.workdayForm.get('dueDate');
  }

  get notes() {
    return this.workdayForm.get('notes');
  }

  get tasks() {
    return this.workdayForm.get('tasks');
  }

  createWorkdayForm(): FormGroup {
    return this.fb.group({
      dueDate : '',
      tasks: this.fb.array([]),
      notes: '',
    });
  }

  submit(): void {
    console.info(this.workdayForm.value);
  }
}
