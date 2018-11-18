import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";
import {ContentService} from "../../shared/content.service";

@Component({
  selector: 'bird',
  templateUrl: './bird-page.component.html',
  styleUrls: ['./bird-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BirdPageComponent implements OnInit {
  pageContent: any;
  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'birdtable'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}
