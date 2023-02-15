import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

currentDate = moment().format("MM/DD/yyyy hh:mm");

}
