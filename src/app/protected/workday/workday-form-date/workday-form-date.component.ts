import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker/public_api';



@Component({
  selector: 'app-workday-form-date',
  templateUrl: './workday-form-date.component.html',
  styleUrls: ['./workday-form-date.component.scss']
})
export class WorkdayFormDateComponent implements OnInit {

  @Input() dueDate: FormControl;

  constructor(private localeService: BsLocaleService) { }

  ngOnInit() {
    this.localeService.use('fr');
  }

}
