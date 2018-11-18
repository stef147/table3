import {Component, OnInit} from '@angular/core';
import {ContentService} from "./shared/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  pageContent: any;
  postsContent: any;
  eventsContent: any;
  title = 'Table';

  constructor(private contentService: ContentService) {};

  ngOnInit() {
    this.getPages();
    this.getPosts();
    this.getEvents();
  }

  getPages() {
    this.contentService.getPages().subscribe(data => {
      console.log('all pages');
      this.pageContent = data;
      console.log( this.pageContent);
    }, error => console.log('Could not load Page Content'));
  }

  getPosts() {
    this.contentService.getPosts().subscribe(data => {
      console.log('all posts');
      this.postsContent = data;
      console.log(this.postsContent);
    }, error => console.log('Could not load Posts Content'));
  }

  getEvents() {
    this.contentService.getEvents().subscribe(data => {
      console.log('all events');
      this.eventsContent = data;
      console.log(this.eventsContent);
    }, error => console.log('Could not load Events Content'));
  }

}
