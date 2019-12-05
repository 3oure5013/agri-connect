import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterTerrainPage } from './acheter-terrain.page';

describe('AcheterTerrainPage', () => {
  let component: AcheterTerrainPage;
  let fixture: ComponentFixture<AcheterTerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterTerrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterTerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
