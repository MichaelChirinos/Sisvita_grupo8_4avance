import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPersonaComponent } from './login-persona/login-persona.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';
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


export const routes: Routes = [
    {path:'', redirectTo: '/principal-menu',pathMatch:'full'},
    {path:'login-persona', component: LoginPersonaComponent},
    {path:'registrar-paciente', component:RegistrarPacienteComponent},
    {path:'principal-paciente', component : PrincipalPacienteComponent},
    {path:'principal-menu', component:PrincipalMenuComponent},
    {path:'login-especialista', component:LoginEspecialistaComponent},
    {path: 'registrar-especialista', component:RegistrarEspecialistaComponent},
    {path :'listar-tipo-test', component : ListarTipoTestComponent},
    {path :'detalle-tipo-test/:id_tipo_test', component : DetalleTipoTestComponent},
    {path : 'principal-especialista', component: PrincipalEspecialistaComponent},
    {path : 'test-realizados', component : TestsRealizadosComponent},
    {path : 'vigilancia', component : VigilanciaComponent},
    {path : 'confirmar-test/:id_test', component : ConfirmarTestComponent},
    {path : 'ver-test/:id_test', component : VerTestComponent},
    {path : 'ver-test-paciente/:id_test', component : VerTestPacienteComponent},
    {path : 'ver-datos/:id_paciente', component : VerDatosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
