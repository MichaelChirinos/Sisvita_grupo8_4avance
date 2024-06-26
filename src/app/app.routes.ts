import { Routes } from '@angular/router';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { PrincipalComponent } from './principal/principal.component';
import { Test1Component } from './test1/test1.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { Test2Component } from './test2/test2.component';
import { Diagnostico2Component } from './diagnostico2/diagnostico2.component';

export const routes: Routes = [
    {path:'', redirectTo: '/login-persona',pathMatch:'full'},
    {path:'login-persona', component: LoginPersonaComponent},
    {path:'registrar-persona', component:RegistrarPersonaComponent},
    {path:'principal', component : PrincipalComponent},
    {path:'test1', component:Test1Component},
    {path:'diagnostico', component:DiagnosticoComponent},
    {path:'test2', component:Test2Component},
    {path:'diagnostico2', component:Diagnostico2Component},
];

export class AppRoutingModule { }
