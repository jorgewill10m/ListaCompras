import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'http://localhost:4200/callback',  // URL de callback
  redirectUri: window.location.origin,  // URL de redirecionamento após autenticação
  clientId: 'vg29CGHznUTNGwwg4bBjkl6PXK8zoUVO',  // ID do cliente OAuth
  scope: 'openid profile email',
  responseType: 'token'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();  // Inicia o fluxo de autenticação
  }

  logout() {
    this.oauthService.logOut();  // Desloga o usuário
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();  // Verifica se o usuário tem um token válido
  }

  get token(): string {
    return this.oauthService.getAccessToken();  // Retorna o token de acesso
  }

  // Método para lidar com o callback da autenticação OAuth
  handleAuthCallback(): void {
    this.oauthService.tryLogin();  // Processa o callback do OAuth
  }
}
