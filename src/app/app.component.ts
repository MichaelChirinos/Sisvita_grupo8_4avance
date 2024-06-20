import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { LoginEspecialistaComponent } from './login-especialista/login-especialista.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { RegistrarTestComponent } from './test/test.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrarTestComponent,RegistrarEspecialistaComponent,RegistrarPacienteComponent,NavbarComponent,LoginPersonaComponent,PrincipalPacienteComponent,PrincipalMenuComponent,LoginEspecialistaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-demo01-crud';

  constructor(private router: Router) {}
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
