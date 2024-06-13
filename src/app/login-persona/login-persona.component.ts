import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-persona',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './login-persona.component.html',
  styleUrls: ['./login-persona.component.css']
})
export class LoginPersonaComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]]
    });
  }

  loginPersona() {
    if (this.loginForm.valid) {
      this.http.post<any>('http://localhost:5000/usuario/v1/login-persona', this.loginForm.value)
        .subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Login exitoso',
              text: 'Has iniciado sesión correctamente!',
            });
            localStorage.setItem('id_usuario', response.data.id_usuario);
            console.log('ID de usuario guardado en localStorage:', response.data.id_usuario);
            this.router.navigate(['/principal']); // Redirigir a la página principal
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error de autenticación',
              text: 'Correo o clave incorrecta!',
            });
          }
        );
    }
  }
}

