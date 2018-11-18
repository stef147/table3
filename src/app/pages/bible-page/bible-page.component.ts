import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";
import {ContentService} from "../../shared/content.service";

@Component({
  selector: 'bible',
  templateUrl: './bible-page.component.html',
  styleUrls: ['./bible-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BiblePageComponent implements OnInit {

  pageContent: any;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'bible-reading-plan'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  }

}
