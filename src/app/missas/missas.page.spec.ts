import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissasPage } from './missas.page';

describe('MissasPage', () => {
  let component: MissasPage;
  let fixture: ComponentFixture<MissasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
