import { Routes } from '@angular/router';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { LoginEspecialistaComponent } from './login-especialista/login-especialista.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { RegistrarTestComponent } from './test/test.component';

export const routes: Routes = [
    {path:'', redirectTo: '/principal-menu',pathMatch:'full'},
    {path:'login-persona', component: LoginPersonaComponent},
    {path:'registrar-paciente', component:RegistrarPacienteComponent},
    {path:'test', component:RegistrarTestComponent},
    {path:'principal-paciente', component : PrincipalPacienteComponent},
    {path:'principal-menu', component:PrincipalMenuComponent},
    {path:'login-especialista', component:LoginEspecialistaComponent},
    {path: 'registrar-especialista', component:RegistrarEspecialistaComponent}
];

export class AppRoutingModule { }
