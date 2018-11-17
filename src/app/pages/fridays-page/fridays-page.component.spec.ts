import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridaysPageComponent } from './fridays-page.component';

describe('FridaysPageComponent', () => {
  let component: FridaysPageComponent;
  let fixture: ComponentFixture<FridaysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridaysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
