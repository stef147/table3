import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'fridays',
  templateUrl: './fridays-page.component.html',
  styleUrls: ['./fridays-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class FridaysPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
