import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  template: '<p>Login em andamento...</p>',  // Exibe uma mensagem enquanto o OAuth processa a resposta
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Lida com o retorno da autenticação OAuth
    this.authService.handleAuthCallback();  // Chama o método que processa o callback do OAuth
  }
}
