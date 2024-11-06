import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'http://localhost:4200/callback',  
  redirectUri: window.location.origin,
  clientId: 'vg29CGHznUTNGwwg4bBjkl6PXK8zoUVO',
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
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get token(): string {
    return this.oauthService.getAccessToken();
  }

  // Adicionando o método handleAuthCallback()
  handleAuthCallback(): void {
    this.oauthService.tryLogin();  // Processa o callback do OAuth
  }
}
