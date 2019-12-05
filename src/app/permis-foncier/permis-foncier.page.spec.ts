import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisFoncierPage } from './permis-foncier.page';

describe('PermisFoncierPage', () => {
  let component: PermisFoncierPage;
  let fixture: ComponentFixture<PermisFoncierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisFoncierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisFoncierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
