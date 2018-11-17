import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleshipPageComponent } from './discipleship-page.component';

describe('DiscipleshipPageComponent', () => {
  let component: DiscipleshipPageComponent;
  let fixture: ComponentFixture<DiscipleshipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscipleshipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipleshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
