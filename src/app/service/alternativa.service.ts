import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alternativa } from '../model/alternativa';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {
  private apiUrl = 'http://localhost:5000/alternativa/v1';

  constructor(private http: HttpClient) { }

  listarAlternativas(id_tipo_test: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar/${id_tipo_test}`);
  }
}
