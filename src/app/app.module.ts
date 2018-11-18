import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BeliefsPageComponent } from './pages/beliefs-page/beliefs-page.component';
import { BiblePageComponent } from './pages/bible-page/bible-page.component';
import { BirdPageComponent } from './pages/bird-page/bird-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ChristmasPageComponent } from './pages/christmas-page/christmas-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DiscipleshipPageComponent } from './pages/discipleship-page/discipleship-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FridaysPageComponent } from './pages/fridays-page/fridays-page.component';
import { GivingPageComponent } from './pages/giving-page/giving-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';
import { LeadershipPageComponent } from './pages/leadership-page/leadership-page.component';
import { LocationComponent } from './shared/location/location.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PhotosComponent } from './shared/photos/photos.component';
import { PrayerPageComponent } from './pages/prayer-page/prayer-page.component';
import { TotsPageComponent } from './pages/tots-page/tots-page.component';
import { ValuesPageComponent } from './pages/values-page/values-page.component';
import { WitcPageComponent } from './pages/witc-page/witc-page.component';
import {AppRoutingModule} from "./app.routing";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {AgmCoreModule} from "@agm/core";


library.add(faFacebookF);
library.add(faInstagram);


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    BeliefsPageComponent,
    BiblePageComponent,
    BirdPageComponent,
    BlogPageComponent,
    CalendarPageComponent,
    ChristmasPageComponent,
    ContactPageComponent,
    DiscipleshipPageComponent,
    FooterComponent,
    FridaysPageComponent,
    GivingPageComponent,
    HomePageComponent,
    KidsPageComponent,
    LeadershipPageComponent,
    LocationComponent,
    NavbarComponent,
    PhotosComponent,
    PrayerPageComponent,
    TotsPageComponent,
    ValuesPageComponent,
    WitcPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmp5blb-ong3ICIun0iLPKGi3A2LZfEKg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
