import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class CaHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.getStoredToke();

    if (token) {
      const request = req.clone({setHeaders: {Authorization: token.token_type + ' ' + token.access_token}});
      return next.handle(request);
    } else {
      return next.handle(req).catch((response) => {
        return response;
      });
    }

  }

  private getStoredToke() {
    let token = localStorage.getItem('ca-token');
    return JSON.parse(token);
  }
}
