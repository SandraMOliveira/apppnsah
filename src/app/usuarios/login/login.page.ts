import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../shared/usuarios.service';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuariosService,
              private router: Router,
              private toast: Toast) { }

  ngOnInit() {
    this.criarFormulario();
  }
  get email() {return this.formLogin.get('email'); }
  get senha() { return this.formLogin('senha'); }

  criarFormulario(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((mensagem: string) => {
        this.toast.show(mensagem);
      });
    }
  }

}
