import { Component,OnInit } from '@angular/core';
import { Test2Service } from '../service/test2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnostico2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnostico2.component.html',
  styleUrl: './diagnostico2.component.css'
})
export class Diagnostico2Component implements OnInit {
  respuestas2: any = null;
  sumaRespuestas2: number = 0;
  resultado2: string = '';

  conversion: { [key: string]: number } = {
    'Nunca': 0,
    'A veces': 1,
    'A menudo': 2,
    'Siempre': 3
  };

  constructor(private test2Service: Test2Service) { }

  ngOnInit(): void {
    // Obtener las respuestas y calcular la suma de respuestas
    this.respuestas2 = this.test2Service.obtenerRespuestas();
    if (this.respuestas2) {
      this.sumaRespuestas2 = this.calcularSumaRespuestas(this.respuestas2.respuestas2);
      this.resultado2 = this.determinarResultado(this.sumaRespuestas2);
    }
  }

  calcularSumaRespuestas(respuestas2: string[]): number {
    let suma = 0;
    respuestas2.forEach(respuesta2 => {
      if (this.conversion[respuesta2]) {
        suma += this.conversion[respuesta2];
      }
    });
    return suma;
  }

  determinarResultado(sumaRespuestas2: number): string {
    if (sumaRespuestas2 >= 0 && sumaRespuestas2 <= 10) {
      return 'Esto indicaría que el estudiante experimenta niveles muy bajos de ansiedad, que probablemente no interfieren con su vida diaria.';
    } else if (sumaRespuestas2 >= 11 && sumaRespuestas2 <= 20) {
      return 'Esto sugiere un nivel leve de ansiedad. El estudiante puede experimentar ansiedad ocasionalmente, pero generalmente es manejable';
    } else if (sumaRespuestas2 >= 21 && sumaRespuestas2 <= 30) {
      return 'Esto sugiere un nivel moderado de ansiedad, donde el estudiante podría beneficiarse de estrategias de manejo de la ansiedad.';
    } else if (sumaRespuestas2 >= 31 && sumaRespuestas2 <= 40) {
      return 'Esto indica un nivel significativo de ansiedad. El estudiante experimenta síntomas frecuentes que afectan su desempeño académico y su bienestar general.';
    } else if (sumaRespuestas2 >= 41 && sumaRespuestas2 <= 50) {
      return 'Esto refleja un nivel severo de ansiedad, lo que indica que el estudiante podría necesitar apoyo profesional o terapia para manejar sus síntomas.';
    } else if (sumaRespuestas2 >= 51 && sumaRespuestas2 <= 60) {
      return 'Esto refleja un nivel muy severo de ansiedad. El estudiante tiene síntomas graves que afectan profundamente su calidad de vida y su capacidad para funcionar.';
    } else {
      return 'No se pudo determinar';
    }
  }
}