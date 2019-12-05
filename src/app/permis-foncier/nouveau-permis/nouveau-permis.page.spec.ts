import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPermisPage } from './nouveau-permis.page';

describe('NouveauPermisPage', () => {
  let component: NouveauPermisPage;
  let fixture: ComponentFixture<NouveauPermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPermisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
