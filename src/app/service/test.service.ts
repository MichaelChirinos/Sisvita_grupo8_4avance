import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  guardarTest(test: Test): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/test/v1/agregar`, test);
  }
  listarTestsPorPaciente(id_paciente: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/test/v1/paciente/${id_paciente}`);
  }
  listarTodosLosTests(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/test/v1/listar`);
  }
  obtenerDetalleTest(id_test: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/test/v1/detalle/${id_test}`);
  }
  ConfirmarTest(test: Test): Observable<any> {
    return this.http.put(`${this.baseUrl}/test/v1/confirmar/${test.id_test}`, test );
  }
  actualizarTest(test: Test): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/test/v1/actualizar/${test.id_test}`, test);
  }
  obtenerTratamientos(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/tratamiento/v1/listar`);
  }
  obtenerMedidas(id_especialista : number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/medida/v1/listar/${id_especialista}`);
  }
  VerTest(id_test: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/test/v1/detalle/${id_test}`);
  }
}