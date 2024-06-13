import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { Test2Service } from '../service/test2.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { test1 } from '../model/test1';

@Component({
  selector: 'app-test2',
  standalone: true,
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
})
export class Test2Component implements OnInit {
  respuestaForm: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private test2Service: Test2Service,
    private router: Router
  ) {
    this.respuestaForm = new FormGroup({
      respuesta_1: new FormControl('', [Validators.required]),
      respuesta_2: new FormControl('', [Validators.required]),
      respuesta_3: new FormControl('', [Validators.required]),
      respuesta_4: new FormControl('', [Validators.required]),
      respuesta_5: new FormControl('', [Validators.required]),
      respuesta_6: new FormControl('', [Validators.required]),
      respuesta_7: new FormControl('', [Validators.required]),
      respuesta_8: new FormControl('', [Validators.required]),
      respuesta_9: new FormControl('', [Validators.required]),
      respuesta_10: new FormControl('', [Validators.required]),
      respuesta_11: new FormControl('', [Validators.required]),
      respuesta_12: new FormControl('', [Validators.required]),
      respuesta_13: new FormControl('', [Validators.required]),
      respuesta_14: new FormControl('', [Validators.required]),
      respuesta_15: new FormControl('', [Validators.required]),
      respuesta_16: new FormControl('', [Validators.required]),
      respuesta_17: new FormControl('', [Validators.required]),
      respuesta_18: new FormControl('', [Validators.required]),
      respuesta_19: new FormControl('', [Validators.required]),
      respuesta_20: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // No es necesario hacer nada aquí ya que el servicio maneja el ID del usuario
  }

  registrarRespuestas(): void {
    if (this.respuestaForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia...',
        text: 'Por favor complete todas las respuestas antes de enviar.',
      });
      return;
    }

    const respuestas2 = {
      respuestas2: [
        this.respuestaForm.get('respuesta_1')?.value,
        this.respuestaForm.get('respuesta_2')?.value,
        this.respuestaForm.get('respuesta_3')?.value,
        this.respuestaForm.get('respuesta_4')?.value,
        this.respuestaForm.get('respuesta_5')?.value,
        this.respuestaForm.get('respuesta_6')?.value,
        this.respuestaForm.get('respuesta_7')?.value,
        this.respuestaForm.get('respuesta_8')?.value,
        this.respuestaForm.get('respuesta_9')?.value,
        this.respuestaForm.get('respuesta_10')?.value,
        this.respuestaForm.get('respuesta_11')?.value,
        this.respuestaForm.get('respuesta_12')?.value,
        this.respuestaForm.get('respuesta_13')?.value,
        this.respuestaForm.get('respuesta_14')?.value,
        this.respuestaForm.get('respuesta_15')?.value,
        this.respuestaForm.get('respuesta_16')?.value,
        this.respuestaForm.get('respuesta_17')?.value,
        this.respuestaForm.get('respuesta_18')?.value,
        this.respuestaForm.get('respuesta_19')?.value,
        this.respuestaForm.get('respuesta_20')?.value,
      ]
    };

    this.test2Service.registrarRespuestas(respuestas2)
      .subscribe({
        next: (response: any) => {
          console.log('Respuestas registradas:', response);
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Se registraron exitosamente las respuestas!',
          });
          this.respuestaForm.reset();
          this.test2Service.guardarRespuestas(respuestas2);
          this.router.navigate(['/diagnostico2']); // Redirigir a la página principal
        },
        error: (error) => {
          console.error('Error al registrar respuestas:', error);
          Swal.fire({
            icon: 'error',
            title: 'Advertencia...',
            text: 'Ha ocurrido un error al registrar respuestas!',
          });
        }
      });
  }
}