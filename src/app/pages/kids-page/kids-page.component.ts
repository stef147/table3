import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'kids',
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class KidsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
