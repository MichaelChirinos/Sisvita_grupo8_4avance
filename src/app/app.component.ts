import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { LoginEspecialistaComponent } from './login-especialista/login-especialista.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { ListarTipoTestComponent } from './listar-tipo-test/listar-tipo-test.component';
import { DetalleTipoTestComponent } from './detalle-tipo-test/detalle-tipo-test.component';
import { PrincipalEspecialistaComponent } from './principal-especialista/principal-especialista.component';
import { TestsRealizadosComponent } from './tests-realizados/tests-realizados.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { ConfirmarTestComponent } from './confirmar-test/confirmar-test.component';
import { VerTestComponent } from './ver-test/ver-test.component';
import { VerTestPacienteComponent } from './ver-test-paciente/ver-test-paciente.component';
import { VerDatosComponent } from './ver-datos/ver-datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DetalleTipoTestComponent,VerDatosComponent,VigilanciaComponent,VerTestPacienteComponent,VerTestComponent,ConfirmarTestComponent,ListarTipoTestComponent,TestsRealizadosComponent,PrincipalEspecialistaComponent,RegistrarEspecialistaComponent,RegistrarPacienteComponent,NavbarComponent,LoginPersonaComponent,PrincipalPacienteComponent,PrincipalMenuComponent,LoginEspecialistaComponent],
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
