import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTerrainPage } from './location-terrain.page';

describe('LocationTerrainPage', () => {
  let component: LocationTerrainPage;
  let fixture: ComponentFixture<LocationTerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTerrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
