import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { PrincipalComponent } from './principal/principal.component';
import { Test1Component } from './test1/test1.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { Test2Component } from './test2/test2.component';
import { Diagnostico2Component } from './diagnostico2/diagnostico2.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrarPersonaComponent,LoginPersonaComponent,PrincipalComponent,Test1Component,DiagnosticoComponent,Test2Component,Diagnostico2Component,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-demo01-crud';
}
