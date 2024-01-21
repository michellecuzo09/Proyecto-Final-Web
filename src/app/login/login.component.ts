import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    // Puedes realizar alguna lógica inicial si es necesario
  }

  redirectToSistemaAdministrativo() {
    this.loginService.login(this.usuario, this.password).subscribe(
      (isAuthenticated: boolean) => {
        if (isAuthenticated) {
          this.router.navigate(['/sistema_administrativo']);
        } else {
          alert('Inicio de sesión fallido. Verifica tus credenciales.');
          alert(isAuthenticated);
        }
        alert(isAuthenticated);
      },
      error => {
        console.error('Error al intentar iniciar sesión', error);
        
        // Puedes mostrar un mensaje de error al usuario si es necesario
      }
    );
  }
}