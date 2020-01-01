import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workday-form-tasks-add',
  templateUrl: './workday-form-tasks-add.component.html',
  styleUrls: ['./workday-form-tasks-add.component.scss']
})
export class WorkdayFormTasksAddComponent implements OnInit {

  @Output() addedTask = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.addedTask.emit();
  }

}
