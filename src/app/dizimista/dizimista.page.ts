import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from '../core/shared/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dizimista',
  templateUrl: './dizimista.page.html',
  styleUrls: ['./dizimista.page.scss'],
})
export class DizimistaPage implements OnInit {
  formDizimista: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toast: ToastService,
              private router: Router,) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this .formDizimista.get('nome'); }
  get nasc() { return this .formDizimista.get('nasc'); }
  get endereco() { return this .formDizimista.get('endereco'); }
  get comunidade() { return this .formDizimista.get('comunidade'); }
  get telefone() { return this .formDizimista.get('telefone'); }
  get email() { return this .formDizimista.get('email'); }
  get contribuir() { return this .formDizimista.get('contribuir'); }
  get obs() { return this .formDizimista.get('obs'); }
 

  criarFormulario() {
    this .formDizimista = this .formBuilder.group({
      nome: [''],
      nasc: [''],
      endereco: [''],
      comunidade: [''],
      telefone: [''],
      email: [''],
      contribuir: [''],
      obs: ['']
      
    });
  }

  // onSubmit() {
  //   if (this.formDizimista.valid) {
  //     this.usuariosService.criarConta(this.formDizimista.value)
  //      .then( () => {
  //         this.toast.show('Sua conta foi criada com sucesso. Verifique seu e-mail');
  //         this.router.navigate(['/']);
  //       })
  //       .catch(mensagem => {
  //         this.toast.show(mensagem);
  //       });
  //   }
  // }

}
