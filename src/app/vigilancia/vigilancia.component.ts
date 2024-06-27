import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
import { CommonModule } from '@angular/common';
import { TipoTestService } from '../service/tipo-test.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Test } from '../model/test';

@Component({
  selector: 'app-vigilancia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css'],
})
export class VigilanciaComponent implements OnInit {
  tests: any[] = [];
  testsFiltrados: any[] = [];
  filtroNombrePaciente: string = '';
  filtroEscalaColor: string = '';
  filtroTipoTest: string = '';
  tiposTest: any[] = []; // Lista de todos los tipos de test disponibles


  constructor(private testService: TestService, private router: Router, private tipoTestService: TipoTestService) { }


  ngOnInit(): void {
    if (this.isBrowser()) {
      this.cargarTodosLosTests();
      this.listarTiposTest();
    }
  }


  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  cargarTodosLosTests(): void {
    this.testService.listarTodosLosTests().subscribe(response => {
      if (response.status === 200) {
        this.tests = response.data;
        this.testsFiltrados = [...this.tests]; // Copia inicial de los tests filtrados
      }
    }, error => {
      console.error('Error al cargar todos los tests:', error);
    });
  }

  aplicarFiltros() {
    this.testsFiltrados = this.tests.filter(test => {
      return (!this.filtroNombrePaciente || test.nombre_paciente.toLowerCase().includes(this.filtroNombrePaciente.toLowerCase())) &&
             (!this.filtroEscalaColor || test.color === this.filtroEscalaColor) &&
             (!this.filtroTipoTest || test.nombre_tipo_test === this.filtroTipoTest);
    });
  }

   limpiarFiltros() {
    this.filtroNombrePaciente = '';
    this.filtroEscalaColor = '';
    this.filtroTipoTest = '';
    this.aplicarFiltros();
  }

  verDetalleTest(id_test: number): void {
    this.router.navigate(['/confirmar-test', id_test]);
  }
  VerTest(id_test: number): void {
    this.router.navigate(['/ver-test', id_test]);
  }
  listarTiposTest():  void{
    this.tipoTestService.listarTiposTest().subscribe(response => {
      if (response.status === 200) {
        this.tiposTest = response.data;
      }
    });    
    Array.from(new Set(this.tests.map(test => test.nombre_tipo_test)));
  }
}
