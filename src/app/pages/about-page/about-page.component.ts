import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../shared/content.service";
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.less']
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutPageComponent implements OnInit {
  pageContent: any;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'about'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}
