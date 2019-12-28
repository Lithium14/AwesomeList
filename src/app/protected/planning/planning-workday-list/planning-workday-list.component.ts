import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-planning-workday-list',
  templateUrl: './planning-workday-list.component.html',
  styleUrls: ['./planning-workday-list.component.scss']
})
export class PlanningWorkdayListComponent implements OnInit {

  public workdays$; // il s'agit d'un observable avec le $

  public workdays: any;

  onWorkdayRemoved(dueDate: string) {
    this.workdays = this.workdays.filter(workday =>
     !dueDate.includes(workday.dueDate)
    );
    this.workdays$ = of(this.workdays);
  }

  constructor() { }

  ngOnInit() {
    this.workdays$ = of([
      { dueDate: 'Lundi', doneTasks: 1, remainingTasks: 3 },
      { dueDate: 'Mardi', doneTasks: 0, remainingTasks: 2 },
      { dueDate: 'Mercredi', doneTasks: 0, remainingTasks: 1 }
     ]);

    this.workdays$ = of(this.workdays).pipe(delay(1000));
  }

}
