import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracoesPage } from './oracoes.page';

describe('OracoesPage', () => {
  let component: OracoesPage;
  let fixture: ComponentFixture<OracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
