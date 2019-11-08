import { ContatoService } from './shared/contato.service';
import { ToastService } from './../core/shared/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  formContato: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toast: ToastService,
              private router: Router,
              private contatoService: ContatoService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formContato = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],

    });

  }

  onSubmit() {
    if (this.formContato.value) {
      this.contatoService.inserir
    }
  }



}
