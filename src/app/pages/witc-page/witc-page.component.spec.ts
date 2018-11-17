import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcPageComponent } from './witc-page.component';

describe('WitcPageComponent', () => {
  let component: WitcPageComponent;
  let fixture: ComponentFixture<WitcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
