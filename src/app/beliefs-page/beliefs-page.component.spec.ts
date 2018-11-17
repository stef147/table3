import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliefsPageComponent } from './beliefs-page.component';

describe('BeliefsPageComponent', () => {
  let component: BeliefsPageComponent;
  let fixture: ComponentFixture<BeliefsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeliefsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliefsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
