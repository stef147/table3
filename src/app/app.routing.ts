import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {BeliefsPageComponent} from "./pages/beliefs-page/beliefs-page.component";
import {BiblePageComponent} from "./pages/bible-page/bible-page.component";
import {BirdPageComponent} from "./pages/bird-page/bird-page.component";
import {BlogPageComponent} from "./pages/blog-page/blog-page.component";
import {CalendarPageComponent} from "./pages/calendar-page/calendar-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {DiscipleshipPageComponent} from "./pages/discipleship-page/discipleship-page.component";
import {GivingPageComponent} from "./pages/giving-page/giving-page.component";
import {FridaysPageComponent} from "./pages/fridays-page/fridays-page.component";
import {KidsPageComponent} from "./pages/kids-page/kids-page.component";
import {LeadershipPageComponent} from "./pages/leadership-page/leadership-page.component";
import {PrayerPageComponent} from "./pages/prayer-page/prayer-page.component";
import {TotsPageComponent} from "./pages/tots-page/tots-page.component";
import {ValuesPageComponent} from "./pages/values-page/values-page.component";
import {WitcPageComponent} from "./pages/witc-page/witc-page.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'beliefs',
    component: BeliefsPageComponent
  },
  {
    path: 'bible',
    component: BiblePageComponent
  },
  {
    path: 'bird',
    component: BirdPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  },
  {
    path: 'calendar',
    component: CalendarPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'discipleship',
    component: DiscipleshipPageComponent
  },
  {
    path: 'fridays',
    component: FridaysPageComponent
  },
  {
    path: 'giving',
    component: GivingPageComponent
  },
  {
    path: 'kids',
    component: KidsPageComponent
  },
  {
    path: 'leadership',
    component: LeadershipPageComponent
  },
  {
    path: 'prayer',
    component: PrayerPageComponent
  },

  {
    path: 'tots',
    component: TotsPageComponent
  },
  {
    path: 'values',
    component: ValuesPageComponent
  },
  {
    path: 'witc',
    component: WitcPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

