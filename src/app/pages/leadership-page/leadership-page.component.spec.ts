import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipPageComponent } from './leadership-page.component';

describe('LeadershipPageComponent', () => {
  let component: LeadershipPageComponent;
  let fixture: ComponentFixture<LeadershipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
