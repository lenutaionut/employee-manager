import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public date = Date.now();
  public currentDate = moment(this.date).format("MM/DD/yyyy hh:mm");

  constructor() { }

  ngOnInit(): void {
  }

}
