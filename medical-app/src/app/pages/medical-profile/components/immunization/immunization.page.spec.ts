import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationPage } from './immunization.page';

describe('ImmunizationPage', () => {
  let component: ImmunizationPage;
  let fixture: ComponentFixture<ImmunizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunizationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
