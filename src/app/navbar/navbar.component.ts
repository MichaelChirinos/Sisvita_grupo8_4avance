import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  userRole: 'paciente' | 'especialista' | null = null;

  ngOnInit(): void {
    this.decodeToken();
  }

  decodeToken(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.id_paciente) {
          this.userRole = 'paciente';
        } else if (decodedToken.id_especialista) {
          this.userRole = 'especialista';
        }
      }
    }
  }
}