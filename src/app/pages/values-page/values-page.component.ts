import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../shared/content.service";
import {fadeInAnimation} from "../../app.animations";

@Component({
  selector: 'values',
  templateUrl: './values-page.component.html',
  styleUrls: ['./values-page.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ValuesPageComponent implements OnInit {

  postContent: any [] = [];
  valuesHeaders: string[] = ['Jesus Is Lord',
    'Discipleship',
    'Generosity',
    'Mission',
    'Community',
    'Prayer',
    'Word & Spirit'];


  valuesToDisplay: string[] = [];

  constructor(private contentService: ContentService) {}


  ngOnInit() {
    this.contentService.getPosts().subscribe(data => {
      this.postContent = data;
      console.log('hello!!!!');
      console.log( this.postContent);

    }, error => console.log('Could not load Page Content'));
  };

  checkIfPostPresent(value){
    var valuePresent = false;
    console.log('checkIfPostPresent');
    console.log(value);
    this.postContent.forEach(function(post) {
      if(post.title.rendered === value) {
        valuePresent = true;
      }
    });
    return valuePresent;
  }

}
