import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorbidityPage } from './morbidity.page';

describe('MorbidityPage', () => {
  let component: MorbidityPage;
  let fixture: ComponentFixture<MorbidityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorbidityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorbidityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
