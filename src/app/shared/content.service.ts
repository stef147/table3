import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private id = '336868909983866|b3f4c857f718d9fb677abb1ac8993f25';
  private startMonth = moment().startOf('month').unix();
  private endMonth  = moment().endOf('month').unix();

  private pagesUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/pages';
  private postsUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/posts';
  private eventsUrl = 'https://graph.facebook.com/tabletandragee/events?fields=cover,name,description,place,id,start_time,event_times&access_token=' + this.id;

  allPages: any;
  allPosts: any;
  allEvents: any;


  constructor(private http: HttpClient) {
    console.log('ContentService started');
  }

  getPages(){
    if(!this.allPages){
      console.log('>>>ContentService.getPages');
      return this.allPages = this.http.get(this.pagesUrl)
        .pipe(
          catchError(err => {
            console.log('error occurred in getPages ');
              this.handleError(err);
          })
        );
    } else {
      return this.allPages;
    }
  }

  getPosts(){
    if(!this.allPosts){
      console.log('>>>ContentService.getPosts');
      return this.allPosts = this.http.get(this.postsUrl)
        .pipe(
          catchError(err => {
            console.log('error occurred in getPosts ');
            this.handleError(err);
          })
        );
    } else {
      return this.allPosts;
    }
  }

  getEvents(){
    if(!this.allEvents){
      console.log('>>>ContentService.getEvents');
      return this.allEvents = this.http.get(this.eventsUrl)
        .pipe(
          catchError(err => {
            console.log('error occurred in getEvents ');
            this.handleError(err);
          })
        );
    } else {
      return this.allEvents;
    }
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
