import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainsPage } from './terrains.page';

describe('TerrainsPage', () => {
  let component: TerrainsPage;
  let fixture: ComponentFixture<TerrainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
