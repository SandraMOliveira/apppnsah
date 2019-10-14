import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarPage } from './orar.page';

describe('OrarPage', () => {
  let component: OrarPage;
  let fixture: ComponentFixture<OrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
