import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermisPage } from './edit-permis.page';

describe('EditPermisPage', () => {
  let component: EditPermisPage;
  let fixture: ComponentFixture<EditPermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPermisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
