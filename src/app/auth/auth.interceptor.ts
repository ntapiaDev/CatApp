import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Récupérer le token d'authentification depuis le local storage ou d'une autre source
    const authToken = 'votre_token_d_authentification';

    // Clonez la requête et ajoutez le token d'authentification dans l'en-tête 'Authorization'
    const authRequest = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${authToken}`,
    //   },
    });

    // Passez la requête modifiée au prochain intercepteur ou au gestionnaire HTTP
    return next.handle(authRequest);
  }
}
