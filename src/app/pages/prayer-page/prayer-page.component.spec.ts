import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerPageComponent } from './prayer-page.component';

describe('PrayerPageComponent', () => {
  let component: PrayerPageComponent;
  let fixture: ComponentFixture<PrayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
