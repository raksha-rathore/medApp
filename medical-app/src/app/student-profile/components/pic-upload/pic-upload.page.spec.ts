import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicUploadPage } from './pic-upload.page';

describe('PicUploadPage', () => {
  let component: PicUploadPage;
  let fixture: ComponentFixture<PicUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
