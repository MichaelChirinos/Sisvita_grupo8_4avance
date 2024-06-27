import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../service/test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../model/test';
import { Tratamiento } from '../model/tratamiento';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-ver-test-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ver-test-paciente.component.html',
  styleUrl: './ver-test-paciente.component.css'
})
export class VerTestPacienteComponent {

  test: any = {
    id_test: 0,
    id_tipo_test: 0,
    id_paciente: 0,
    id_rango_escala: 0,
    id_tratamiento: 0,
    fecha_realizacion: new Date(),
    respuestas: [],
    suma_respuestas: 0,
    confirmar: false,
    observacion: ''
  };
  id_test: number = 0;
  tratamientos: Tratamiento[] = [];
  id_paciente: number = 0;

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.setIdPacienteFromToken();
      this.route.params.subscribe(params => {
        this.id_test = +params['id_test']; // + para convertir a número
        console.log('ID Test:', this.id_test);
        this.cargarTest();
      });
    this.obtenerTratamientos()
    }
  }
  
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
  setIdPacienteFromToken(): void {
    if (this.isBrowser()) {
      const token = localStorage.getItem('access_token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        this.id_paciente = decodedToken.id_paciente;
      } else {
        console.error('Token no encontrado');
      }
    }
  }
  cargarTest(): void {
    this.testService.obtenerDetalleTest(this.id_test).subscribe(response => {
      if (response.status === 200) {
        console.log(response.data); // Agrega esto para depurar
        this.test = response.data[0]; // Asigna el primer elemento si es un array
      }
    }, error => {
      console.error('Error al cargar los tests:', error);
    });
  }
  
  obtenerTratamientos() {
    this.http.get<any>('http://localhost:5000/tratamiento/v1/listar').subscribe(response => {
      this.tratamientos = response.data;
      console.log(this.tratamientos); // Verificar los datos en la consola
    }, error => {
      console.error('Error al obtener tratamientos:', error);
    });
  }
}




