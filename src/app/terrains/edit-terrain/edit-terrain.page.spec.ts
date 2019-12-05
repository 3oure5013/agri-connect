import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTerrainPage } from './edit-terrain.page';

describe('EditTerrainPage', () => {
  let component: EditTerrainPage;
  let fixture: ComponentFixture<EditTerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTerrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
