import { Component, OnInit  } from '@angular/core';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { RouterModule } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-ver-datos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './ver-datos.component.html',
  styleUrl: './ver-datos.component.css'
})
export class VerDatosComponent implements OnInit {

  id_paciente: number = 0;
  paciente: any;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute) { }
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  ngOnInit(): void {
    if (this.isBrowser()) {
    }
    const id_paciente = +(this.route.snapshot.paramMap.get('id_paciente') ?? 0); // Asegura que id_paciente no sea null
    if (id_paciente !== 0) {
      this.pacienteService.getPaciente(id_paciente).subscribe(response => {
        this.paciente = response.data;
      });
  }

}
}
