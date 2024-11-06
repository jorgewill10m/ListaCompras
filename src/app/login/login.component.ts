// src/app/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  onLogin() {
    // Usando o ApiService para obter dados
    this.apiService.getData().subscribe((users: any[]) => {
      const user = users.find(
        (u) => u.email === this.email && u.password === this.password
      );
      if (user) {
        this.router.navigate(['/']);
      } else {
        alert('Credenciais inválidas!');
      }
    });
  }
}
