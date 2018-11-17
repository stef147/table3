import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page.component';
import { BeliefsPageComponent } from './beliefs-page/beliefs-page.component';
import { BiblePageComponent } from './bible-page/bible-page.component';
import { BirdPageComponent } from './bird-page/bird-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    BeliefsPageComponent,
    BiblePageComponent,
    BirdPageComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
