<<<<<<< HEAD
import { Component } from "@angular/core";
@Component({
  selector: "app-login-especialista",
  standalone: true,
  imports: [],
  templateUrl: "./login-especialista.component.html",
  styleUrl: "./login-especialista.component.css",
})
export class LoginEspecialistaComponent {}
=======
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-especialista',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './login-especialista.component.html',
  styleUrls: ['./login-especialista.component.css']
})
export class LoginEspecialistaComponent {
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
      this.http.post<any>('http://127.0.0.1:5000/usuario/v1/login/especialista', this.loginForm.value)
        .subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Login exitoso',
              text: 'Has iniciado sesión correctamente!',
            });
            // Guardar el token en localStorage (aquí asumo que el token está en response.data.access_token)
            localStorage.setItem('access_token', response.data.access_token);
            console.log('Token JWT guardado en localStorage:', response.data.access_token);

            // Opcional: Guardar otros datos del usuario en localStorage si son necesarios
            localStorage.setItem('id_usuario', response.data.usuario.id_usuario);

            // Redirigir a la página principal
            this.router.navigate(['/principal-especialista']);
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
>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3
