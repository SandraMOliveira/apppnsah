import { ToastService } from './../core/shared/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeusPedidosService } from './shared/meus-pedidos.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})

export class MeusPedidosPage implements OnInit {
  formPedidosOracoes: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private toast: ToastService,
              private router: Router,
              private meuspedidos: MeusPedidosService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formPedidosOracoes.get('nome'); }
  get tipo() { return this.formPedidosOracoes.get('tipo'); }
  get pedido() { return this.formPedidosOracoes.get('pedido'); }

  criarFormulario() {
    this.formPedidosOracoes = this.formbuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      pedido: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.formPedidosOracoes.value) {
      this.meuspedidos.inserirPedidos(this.formPedidosOracoes.value);
    }
    this.formPedidosOracoes.reset();
    this.router.navigate(['meus-pedidos']);
    this.toast.show('Pedido recebido com sucesso!');
  }

}
