import { PacienteService } from '../service/paciente.service';
import { Component, Inject, LOCALE_ID ,OnInit } from '@angular/core';
import {
  ReactiveFormsModule,FormControl,FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule, formatDate } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';
import { Paciente } from '../model/paciente';


@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css',
})
export class RegistrarPacienteComponent {
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) {
    this.pacienteForm = this.fb.group({
      tipo_documento: ['', Validators.required],
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
      is_admin: ['', Validators.required],
      fecha_registro: ['', Validators.required]
    });
  }

  registrarPaciente() {
    const persona: Omit<Persona, 'id_persona'> = {
      tipo_documento: this.pacienteForm.get('tipo_documento')?.value,
      documento: this.pacienteForm.get('documento')?.value,
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido_paterno: this.pacienteForm.get('apellido_paterno')?.value,
      apellido_materno: this.pacienteForm.get('apellido_materno')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      fecha_nacimiento: this.pacienteForm.get('fecha_nacimiento')?.value
    };
  
    this.pacienteService.registrarPersona(persona).subscribe(response => {
      const usuario: Omit<Usuario, 'id_usuario'> = {
        id_persona: response.data.id_persona, // Usar el ID de la persona recién creada
        correo: this.pacienteForm.get('correo')?.value,
        clave: this.pacienteForm.get('clave')?.value,
        is_admin: this.pacienteForm.get('is_admin')?.value
      };
  
      this.pacienteService.registrarUsuario(usuario).subscribe(userResponse => {
        const paciente: Omit<Paciente, 'id_paciente'> = {
          id_persona: response.data.id_persona, // Usar el ID de la persona
          fecha_registro: this.pacienteForm.get('fecha_registro')?.value // Usar la fecha ingresada
        };
  
        this.pacienteService.registrarPaciente(paciente).subscribe(pacienteResponse => {
          alert('Paciente registrado correctamente');
          this.pacienteForm.reset();
        }, error => {
          console.error('Error al registrar el paciente:', error);
        });
      }, error => {
        console.error('Error al registrar el usuario:', error);
      });
    }, error => {
      console.error('Error al registrar la persona:', error);
    });
  }
  
}