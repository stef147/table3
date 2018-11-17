import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingPageComponent } from './giving-page.component';

describe('GivingPageComponent', () => {
  let component: GivingPageComponent;
  let fixture: ComponentFixture<GivingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
