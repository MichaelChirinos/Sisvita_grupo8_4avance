import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';
import { Paciente } from '../model/paciente';
import { Especialista } from '../model/especialista';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  registrarPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/persona/v1/agregar`, persona);
  }

  registrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario/v1/agregar`, usuario);
  }

  registrarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/paciente/v1`, paciente);
  }
  registrarEspecialista(especialista: Omit<Especialista, 'id_especialista'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/especialista/v1`, especialista);
  }
  loginPaciente(correo: string, clave: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/paciente`, { correo, clave });
  }

  loginEspecialista(correo: string, clave: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/especialista`, { correo, clave });
  }
  getPaciente(id_paciente: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paciente/v1/${id_paciente}`);
  }
}
