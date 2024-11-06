import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Defina uma interface para o Usuário, caso queira
interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>('http://localhost:3000/users');  // Tipagem para um array de User
  }
}
