import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private id = 'EAAEyYWe3KHoBAPCmAzZC72ONRIEtpZBJCzJo7I3HZAYjsxwvmB5Vy5ZB370GF0NjgmdKm4AMZBBfuFCq3QZApyqvqa9X3lrmj3X2ZACscOS6EZAu4kLYizp29vBFbbNzZAZCLETMOXrB1Se3h0MDwEEGryeDBZC80k1V2Y5jZCMJLOCUEQZDZD';

  private startMonth = moment().startOf('month').unix();
  private endMonth  = moment().endOf('month').unix();

  private pagesUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/pages';
  private postsUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/posts';
  private eventsUrl = 'https://graph.facebook.com/tabletandragee/events?fields=cover,name,description,place,id,start_time,event_times&access_token=' + this.id;
  // private eventsUrl = 'https://graph.facebook.com//v3.2/tabletandragee?fields=events,about&access_token=' + this.id;

  allPages: any;
  allPosts: any;
  allEvents: any;


  constructor(private http: HttpClient) {
    console.log('ContentService started');
  }

  getPages(){
    if(!this.allPages){
      console.log('>>>ContentService.getPages');
      return this.http.get(this.pagesUrl)
        .pipe(
          map( res => {
            if (res !== null) {
              return this.allPages = res;
            } else {
              const httpErrror = new HttpErrorResponse({error: new Error('Error in allPages')});
              throw httpErrror;
            }
          }),
          catchError((err) => this.handleError(err))
        );
    } else {
      return this.allPages;
    }
  }

  getPosts(){
    if(!this.allPosts){
      console.log('>>>ContentService.getPosts');
      return this.http.get(this.postsUrl)
        .pipe(
          map( res => {
            if (res !== null) {
              return this.allPosts = res;
            } else {
              const httpErrror = new HttpErrorResponse({error: new Error('Error in getPosts')});
              throw httpErrror;
            }
          }),
          catchError((err) => this.handleError(err))
        );
    } else {
      return this.allPosts;
    }
  }

  getEvents(){
    if(!this.allEvents){
      console.log('>>>ContentService.getEvents');
      return this.http.get(this.eventsUrl)
        .pipe(
          map( res => {
            if (res !== null) {
              return this.allPosts = res;
            } else {
              const httpErrror = new HttpErrorResponse({error: new Error('Error in getPosts')});
              throw httpErrror;
            }
          }),
          catchError((err) => this.handleError(err))
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
