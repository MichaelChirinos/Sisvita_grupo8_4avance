import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = 'http://localhost:5000'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  obtenerMensajePrueba(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/test/v1`);
  }

  agregarTest(test: Test): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/test/v1/agregar`, test);
  }

  listarTests(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/test/v1/listar`);
  }

  actualizarTest(id: number, test: Test): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/test/v1/actualizar/${id}`, test);
  }

  eliminarTest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/test/v1/eliminar/${id}`);
  }
}
