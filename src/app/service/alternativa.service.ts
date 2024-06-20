import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alternativa } from '../model/alternativa';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {
  private baseUrl = 'http://localhost:5000'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  obtenerMensajePrueba(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alternativa/v1`);
  }

  agregarAlternativa(alternativa: Alternativa): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/alternativa/v1/agregar`, alternativa);
  }

  listarAlternativas(idTipoTest: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alternativa/v1/listar/${idTipoTest}`);
  }

  actualizarAlternativa(id: number, alternativa: Alternativa): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/alternativa/v1/actualizar/${id}`, alternativa);
  }

  eliminarAlternativa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/alternativa/v1/eliminar/${id}`);
  }
}
