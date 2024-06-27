import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Test } from '../model/test';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-tests-realizados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tests-realizados.component.html',
  styleUrls: ['./tests-realizados.component.css']
})
export class TestsRealizadosComponent implements OnInit {
  tests: any[] = [];
  id_paciente: number = 0;

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.setIdPacienteFromToken();
      this.cargarTests();
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

  cargarTests(): void {
    this.testService.listarTestsPorPaciente(this.id_paciente).subscribe(response => {
      if (response.status === 200) {
        this.tests = response.data;
      }
    }, error => {
      console.error('Error al cargar los tests:', error);
    });
  }
  VerTest(id_test: number): void {
    this.router.navigate(['/ver-test-paciente', id_test]);
  }
}
