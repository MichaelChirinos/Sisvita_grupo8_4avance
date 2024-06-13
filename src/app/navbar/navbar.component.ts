import { Component } from '@angular/core';
import { PersonaService } from '../service/Persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private PersonaService: PersonaService, private router: Router) {}

}
