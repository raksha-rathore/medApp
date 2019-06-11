import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHistoryPage } from './family-history.page';

describe('FamilyHistoryPage', () => {
  let component: FamilyHistoryPage;
  let fixture: ComponentFixture<FamilyHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
