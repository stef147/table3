import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {

  title: string = 'Google Map';
  lat: number = 54.352590;
  lng: number = -6.411388;
  zoom: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
