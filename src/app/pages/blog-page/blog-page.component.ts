import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../app.animations";
import {ContentService} from "../../shared/content.service";

@Component({
  selector: 'blog',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class BlogPageComponent implements OnInit {
  postsContent: any;

  constructor(private contentService: ContentService) {};

  ngOnInit() {
    this.contentService.getPosts().subscribe(data => {
      this.postsContent = data;
    }, error => console.log('Could not load Page Content'));
  };

  getAuthor(authorId) {
    var author = 'David Spence';
    if(authorId === 2){
      author = 'David Spence';
    }
    return author;
  }

}
