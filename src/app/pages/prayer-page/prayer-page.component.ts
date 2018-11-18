import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'prayer',
  templateUrl: './prayer-page.component.html',
  styleUrls: ['./prayer-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PrayerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
