import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
