import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTabsPage } from './teste-tabs.page';

describe('TesteTabsPage', () => {
  let component: TesteTabsPage;
  let fixture: ComponentFixture<TesteTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
