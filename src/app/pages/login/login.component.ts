import { Component } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login = '';
  senha = '';
  titulo = 'Pagina de Acesso';
  label = 'Entrar';
  aparencia: MatFormFieldAppearance = 'fill';
  logins = [
    {
      login: 'japa',
      senha: 'leo'
    },
    {
      login: 'ikeda',
      senha: 'taiki'
    },
    {
      login: 'rey',
      senha: 'kaito'
    }
  ]


  constructor(private router: Router) { }
  // Criando função
  redirecionar_home() {
    this.router.navigate(['/home']);

  }

  validacao_login() {
    const login = this.login;
    const senha = this.senha;

    const loginsPermitidos = this.logins;
    const usuario_encontrado = loginsPermitidos.find(user => {
      return user.login === login && user.senha === senha;
    });


    if (usuario_encontrado) {
      this.redirecionar_home()

    } else { alert('Login ou senha inválida!') }

  }




}
