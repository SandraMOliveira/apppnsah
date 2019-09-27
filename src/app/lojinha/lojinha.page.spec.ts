import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojinhaPage } from './lojinha.page';

describe('LojinhaPage', () => {
  let component: LojinhaPage;
  let fixture: ComponentFixture<LojinhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojinhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
