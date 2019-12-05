import { TestBed, async, inject } from '@angular/core/testing';

import { PedidosGuardGuard } from './pedidos-guard.guard';

describe('PedidosGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidosGuardGuard]
    });
  });

  it('should ...', inject([PedidosGuardGuard], (guard: PedidosGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
