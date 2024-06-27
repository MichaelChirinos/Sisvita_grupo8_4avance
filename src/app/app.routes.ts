<<<<<<< HEAD
import { Routes } from "@angular/router";
import { LoginPersonaComponent } from "./login-persona/login-persona.component";
import { RegistrarPersonaComponent } from "./registrar-persona/registrar-persona.component";
import { PrincipalComponent } from "./principal/principal.component";
import { Test1Component } from "./test1/test1.component";
import { DiagnosticoComponent } from "./diagnostico/diagnostico.component";
import { Test2Component } from "./test2/test2.component";
import { Diagnostico2Component } from "./diagnostico2/diagnostico2.component";
import { InicioHomeComponent } from "./inicio-home/inicio-home.component";
import { LoginEspecialistaComponent } from "./login-especialista/login-especialista.component";

export const routes: Routes = [
  { path: "", redirectTo: "/inicio-home", pathMatch: "full" },
  { path: "inicio-home", component: InicioHomeComponent },
  { path: "login-especialista", component: LoginEspecialistaComponent },
  { path: "login-persona", component: LoginPersonaComponent },
  { path: "registrar-persona", component: RegistrarPersonaComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "test1", component: Test1Component },
  { path: "diagnostico", component: DiagnosticoComponent },
  { path: "test2", component: Test2Component },
  { path: "diagnostico2", component: Diagnostico2Component },
=======
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
>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3
];

export class AppRoutingModule {}
