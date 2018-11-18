import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'tots',
  templateUrl: './tots-page.component.html',
  styleUrls: ['./tots-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TotsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
