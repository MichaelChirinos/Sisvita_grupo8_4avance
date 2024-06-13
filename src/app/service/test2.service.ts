import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {
  readonly BASE_URL: string = 'http://localhost:5000'; // Actualiza esta URL con la dirección de tu backend
  private respuestasRegistradas2: any = null;

  constructor(private http: HttpClient) { }

  getIdUsuario(): string {
    return localStorage.getItem('id_usuario') || '';
  }

  registrarRespuestas(form: any): Observable<any> {
    const id_usuario = this.getIdUsuario();
    if (!id_usuario) {
      throw new Error('ID de usuario no disponible');
    }
    return this.http.post<any>(`${this.BASE_URL}/respuesta-usuario2/v1/agregar/${id_usuario}`, form );
  }
  guardarRespuestas(respuestas2: any) {
    this.respuestasRegistradas2 = respuestas2;
  }

  obtenerRespuestas() {
    return this.respuestasRegistradas2;
  }
}
