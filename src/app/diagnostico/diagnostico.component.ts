import { Component,OnInit } from '@angular/core';
import { Test1Service } from '../service/test1.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnostico.component.html',
  styleUrl: './diagnostico.component.css'
})
export class DiagnosticoComponent implements OnInit {
  respuestas: any = null;
  sumaRespuestas: number = 0;
  resultado: string = '';

  conversion: { [key: string]: number } = {
    'Casi ningún día': 0,
    'Ocasionalmente': 1,
    'Frecuentemente': 2,
    'Casi todos los días': 3
  };

  constructor(private test1Service: Test1Service) { }

  ngOnInit(): void {
    // Obtener las respuestas y calcular la suma de respuestas
    this.respuestas = this.test1Service.obtenerRespuestas();
    if (this.respuestas) {
      this.sumaRespuestas = this.calcularSumaRespuestas(this.respuestas.respuestas);
      this.resultado = this.determinarResultado(this.sumaRespuestas);
    }
  }

  calcularSumaRespuestas(respuestas: string[]): number {
    let suma = 0;
    respuestas.forEach(respuesta => {
      if (this.conversion[respuesta]) {
        suma += this.conversion[respuesta];
      }
    });
    return suma;
  }

  determinarResultado(sumaRespuestas: number): string {
    if (sumaRespuestas >= 0 && sumaRespuestas <= 4) {
      return 'Sus resultados indican que tiene muy pocos o ninguno signos de ansiedad';
    } else if (sumaRespuestas >= 5 && sumaRespuestas <= 9) {
      return 'Sus resultados indican que puede estar experimentando algunos signos de ansiedad leve.';
    } else if (sumaRespuestas >= 10 && sumaRespuestas <= 14) {
      return 'Sus resultados indican que puede estar experimentando algunos signos de ansiedad moderada.';
    } else if (sumaRespuestas >= 15 && sumaRespuestas <= 21) {
      return 'Sus resultados indican que puede estar experimentando algunos signos de ansiedad grave.';
    } else {
      return 'No se pudo determinar';
    }
  }
}