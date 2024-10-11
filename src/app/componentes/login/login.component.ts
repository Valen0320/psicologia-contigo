import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Llamar a un servicio de autenticación o hacer la solicitud al servidor
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Puedes manejar la lógica de validación aquí o redirigir a otra página
  }
}
