import { TestBed } from '@angular/core/testing';

import { MeusPedidosService } from './meus-pedidos.service';

describe('MeusPedidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeusPedidosService = TestBed.get(MeusPedidosService);
    expect(service).toBeTruthy();
  });
});
