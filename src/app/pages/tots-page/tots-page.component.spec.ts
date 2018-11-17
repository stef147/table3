import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsPageComponent } from './tots-page.component';

describe('TotsPageComponent', () => {
  let component: TotsPageComponent;
  let fixture: ComponentFixture<TotsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
