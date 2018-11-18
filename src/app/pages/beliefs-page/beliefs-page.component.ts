import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";
import {ContentService} from "../../shared/content.service";

@Component({
  selector: 'beliefs',
  templateUrl: './beliefs-page.component.html',
  styleUrls: ['./beliefs-page.component.less']
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BeliefsPageComponent implements OnInit {
  pageContent: any;

  constructor(private contentService: ContentService) {};

  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'beliefs'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}
