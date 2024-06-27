import { Component } from '@angular/core';
import { PacienteService } from '../service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private PacienteService: PacienteService, private router: Router) {}

}
