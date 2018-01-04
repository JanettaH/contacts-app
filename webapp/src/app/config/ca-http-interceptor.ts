import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class CaHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getStoredToken();
    if (token) {
      const request = req.clone({
        setHeaders: {Authorization: token.token_type + ' ' + token.access_token}
      });
      return this.handleHttpRequest(request, next);
    } else {
      return this.handleHttpRequest(req, next);
    }
  }

  private handleHttpRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((response: HttpErrorResponse) => {
      if (response.status === 200) {
        console.log('200 OK');
        return Observable.throw(response);
      } else {
        console.log('Oops! Something went wrong, please try again!')
      }
    });
  }

  private getStoredToken() {
    let token = localStorage.getItem('ca-token');
    return JSON.parse(token);
  }
}
