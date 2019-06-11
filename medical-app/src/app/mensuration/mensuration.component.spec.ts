import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationComponent } from './mensuration.component';

describe('MensurationComponent', () => {
  let component: MensurationComponent;
  let fixture: ComponentFixture<MensurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensurationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
