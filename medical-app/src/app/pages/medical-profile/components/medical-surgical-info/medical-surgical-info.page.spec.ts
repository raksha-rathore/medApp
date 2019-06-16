import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSurgicalInfoPage } from './medical-surgical-info.page';

describe('MedicalSurgicalInfoPage', () => {
  let component: MedicalSurgicalInfoPage;
  let fixture: ComponentFixture<MedicalSurgicalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalSurgicalInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalSurgicalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
