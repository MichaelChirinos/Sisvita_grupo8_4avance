import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo_test } from '../model/tipo_test';

@Injectable({
  providedIn: 'root'
})
export class TipoTestService {
  private baseUrl = 'http://localhost:5000'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  obtenerMensajePrueba(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tipo_test/v1`);
  }

  agregarTipoTest(Tipo_test: Tipo_test): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tipo_test/v1/agregar`, Tipo_test);
  }

  listarTiposTest(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tipo_test/v1/listar`);
  }

  actualizarTipoTest(id: number, Tipo_test: Tipo_test): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/tipo_test/v1/actualizar/${id}`, Tipo_test);
  }

  eliminarTipoTest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/tipo_test/v1/eliminar/${id}`);
  }
}
