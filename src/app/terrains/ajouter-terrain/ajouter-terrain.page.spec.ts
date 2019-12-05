import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTerrainPage } from './ajouter-terrain.page';

describe('AjouterTerrainPage', () => {
  let component: AjouterTerrainPage;
  let fixture: ComponentFixture<AjouterTerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTerrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
