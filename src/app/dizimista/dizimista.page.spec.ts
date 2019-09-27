import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DizimistaPage } from './dizimista.page';

describe('DizimistaPage', () => {
  let component: DizimistaPage;
  let fixture: ComponentFixture<DizimistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DizimistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DizimistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
