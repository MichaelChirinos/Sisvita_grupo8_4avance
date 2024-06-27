<<<<<<< HEAD
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RegistrarPersonaComponent } from "./registrar-persona/registrar-persona.component";
import { LoginPersonaComponent } from "./login-persona/login-persona.component";
import { PrincipalComponent } from "./principal/principal.component";
import { Test1Component } from "./test1/test1.component";
import { DiagnosticoComponent } from "./diagnostico/diagnostico.component";
import { Test2Component } from "./test2/test2.component";
import { Diagnostico2Component } from "./diagnostico2/diagnostico2.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InicioHomeComponent } from "./inicio-home/inicio-home.component";
import { LoginEspecialistaComponent } from "./login-especialista/login-especialista.component";
=======
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


>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3

@Component({
  selector: "app-root",
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterOutlet,
    RegistrarPersonaComponent,
    LoginPersonaComponent,
    PrincipalComponent,
    Test1Component,
    DiagnosticoComponent,
    Test2Component,
    Diagnostico2Component,
    NavbarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-demo01-crud";
=======
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
>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3
}
