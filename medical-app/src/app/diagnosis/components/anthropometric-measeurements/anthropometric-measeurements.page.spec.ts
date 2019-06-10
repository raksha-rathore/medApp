import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthropometricMeaseurementsPage } from './anthropometric-measeurements.page';

describe('AnthropometricMeaseurementsPage', () => {
  let component: AnthropometricMeaseurementsPage;
  let fixture: ComponentFixture<AnthropometricMeaseurementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthropometricMeaseurementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthropometricMeaseurementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
