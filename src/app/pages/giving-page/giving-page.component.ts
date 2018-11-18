import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'giving',
  templateUrl: './giving-page.component.html',
  styleUrls: ['./giving-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class GivingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
