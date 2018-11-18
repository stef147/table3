import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'witc',
  templateUrl: './witc-page.component.html',
  styleUrls: ['./witc-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WitcPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
