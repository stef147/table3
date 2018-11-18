import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'discipleship',
  templateUrl: './discipleship-page.component.html',
  styleUrls: ['./discipleship-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DiscipleshipPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
