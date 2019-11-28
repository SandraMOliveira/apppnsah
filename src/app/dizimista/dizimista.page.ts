import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../core/shared/toast.service';
import { Router } from '@angular/router';
import { DizimistaService } from './shared/dizimista.service';

@Component({
  selector: 'app-dizimista',
  templateUrl: './dizimista.page.html',
  styleUrls: ['./dizimista.page.scss'],
})
export class DizimistaPage implements OnInit {
  formDizimista: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toast: ToastService,
              private router: Router,
              private dizimistaservice: DizimistaService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formDizimista.get('nome'); }
  get nasc() { return this.formDizimista.get('nasc'); }
  get endereco() { return this.formDizimista.get('endereco'); }
  get comunidade() { return this.formDizimista.get('comunidade'); }
  get telefone() { return this.formDizimista.get('telefone'); }
  get email() { return this.formDizimista.get('email'); }
  get contribuir() { return this.formDizimista.get('contribuir'); }
  get obs() { return this.formDizimista.get('obs'); }


  criarFormulario() {
    this.formDizimista = this.formBuilder.group({
      nome: ['', Validators.required],
      nasc: ['', Validators.required],
      endereco: ['', Validators.required],
      comunidade: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      contribuir: ['', Validators.required],
      obs: [''],

    });
  }

  onSubmit() {
    if (this.formDizimista.value) {
      this.dizimistaservice.criarCadastro(this.formDizimista.value);
    }
    this.toast.show('Cadastro realizado com sucesso!');
    this.router.navigate(['/dizimista']);
  }

}