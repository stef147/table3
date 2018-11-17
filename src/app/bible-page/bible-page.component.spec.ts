import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblePageComponent } from './bible-page.component';

describe('BiblePageComponent', () => {
  let component: BiblePageComponent;
  let fixture: ComponentFixture<BiblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
