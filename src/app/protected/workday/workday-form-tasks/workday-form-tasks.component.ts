import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-workday-form-tasks',
  templateUrl: './workday-form-tasks.component.html',
  styleUrls: ['./workday-form-tasks.component.scss']
})
export class WorkdayFormTasksComponent implements OnInit {

  @Input() tasks: FormArray;
  @Input() workdayForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onAddedTask() {
    const taskGroup = this.fb.group({
      title: '',
    });
    this.tasks.push(taskGroup);
  }

  onRemovedTask(index: number) {
    this.tasks.removeAt(index);
  }

}
