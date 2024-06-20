import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../model/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private baseUrl = 'http://localhost:5000'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  obtenerMensajePrueba(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pregunta/v1`);
  }

  agregarPregunta(pregunta: Pregunta): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pregunta/v1/agregar`, pregunta);
  }

  listarPreguntas(idTipoTest: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pregunta/v1/listar/${idTipoTest}`);
  }

  actualizarPregunta(id: number, pregunta: Pregunta): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/pregunta/v1/actualizar/${id}`, pregunta);
  }

  eliminarPregunta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/pregunta/v1/eliminar/${id}`);
  }
}
