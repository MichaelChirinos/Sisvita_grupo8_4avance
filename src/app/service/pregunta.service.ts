import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../model/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private apiUrl = 'http://localhost:5000/pregunta/v1';

  constructor(private http: HttpClient) { }

  listarPreguntas(id_tipo_test: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar/${id_tipo_test}`);
  }
}
