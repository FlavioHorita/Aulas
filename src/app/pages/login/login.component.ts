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
  label = 'botão';
  aparencia: MatFormFieldAppearance = 'fill';


  constructor(private router: Router) { }
  // Criando função
  redirecionar_home() {
    this.router.navigate(['/home']);

  }

  validacao_login() {
    const login = this.login;
    const senha = this.senha;

    if (login === 'japa' && senha === 'leo') {
      this.redirecionar_home()

    } else { alert('Login ou senha inválida!') }

  }




}
