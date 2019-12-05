import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisDetailPage } from './permis-detail.page';

describe('PermisDetailPage', () => {
  let component: PermisDetailPage;
  let fixture: ComponentFixture<PermisDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
