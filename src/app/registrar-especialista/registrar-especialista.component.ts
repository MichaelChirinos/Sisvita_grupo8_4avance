import { PacienteService } from '../service/paciente.service';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  ReactiveFormsModule, FormControl, FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule, formatDate } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';
import { Especialista } from '../model/especialista';

@Component({
  selector: 'app-registrar-especialista',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './registrar-especialista.component.html',
  styleUrl: './registrar-especialista.component.css',
})
export class RegistrarEspecialistaComponent {
  especialistaForm: FormGroup;

  constructor(private fb: FormBuilder, private PacienteService: PacienteService) {
    this.especialistaForm = this.fb.group({
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
      colegiatura: ['', Validators.required]
    });
  }

  registrarEspecialista() {
    const persona: Omit<Persona, 'id_persona'> = {
      tipo_documento: this.especialistaForm.get('tipo_documento')?.value,
      documento: this.especialistaForm.get('documento')?.value,
      nombre: this.especialistaForm.get('nombre')?.value,
      apellido_paterno: this.especialistaForm.get('apellido_paterno')?.value,
      apellido_materno: this.especialistaForm.get('apellido_materno')?.value,
      telefono: this.especialistaForm.get('telefono')?.value,
      fecha_nacimiento: this.especialistaForm.get('fecha_nacimiento')?.value
    };
  
    this.PacienteService.registrarPersona(persona).subscribe(response => {
      const usuario: Omit<Usuario, 'id_usuario'> = {
        id_persona: response.data.id_persona, // Usar el ID de la persona recién creada
        correo: this.especialistaForm.get('correo')?.value,
        clave: this.especialistaForm.get('clave')?.value,
        is_admin: this.especialistaForm.get('is_admin')?.value
      };
  
      this.PacienteService.registrarUsuario(usuario).subscribe(userResponse => {
        const especialista: Omit<Especialista, 'id_especialista'> = {
          id_persona: response.data.id_persona, // Usar el ID de la persona
          colegiatura: this.especialistaForm.get('colegiatura')?.value
        };
  
        this.PacienteService.registrarEspecialista(especialista).subscribe(especialistaResponse => {
          alert('Especialista registrado correctamente');
          this.especialistaForm.reset();
        }, error => {
          console.error('Error al registrar el especialista:', error);
        });
      }, error => {
        console.error('Error al registrar el usuario:', error);
      });
    }, error => {
      console.error('Error al registrar la persona:', error);
    });
  }
}
