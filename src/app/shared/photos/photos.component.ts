import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PhotosComponent implements OnInit {

  @Input()  photoName: string;

  constructor() { }

  ngOnInit() {
  }

}
