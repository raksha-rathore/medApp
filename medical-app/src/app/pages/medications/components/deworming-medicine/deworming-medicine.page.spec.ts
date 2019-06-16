import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewormingMedicinePage } from './deworming-medicine.page';

describe('DewormingMedicinePage', () => {
  let component: DewormingMedicinePage;
  let fixture: ComponentFixture<DewormingMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewormingMedicinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewormingMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
