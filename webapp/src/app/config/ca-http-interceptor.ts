import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {PopupService} from '../popup/popup/popup.service';
import {Inject} from '@angular/core';
import 'rxjs/add/observable/throw';

export class CaHttpInterceptor implements HttpInterceptor {


  constructor(@Inject(PopupService)private popup: PopupService) {
  }

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


      const errorMessage = {title: '', message: ''};
      if (response.status === 401) {
        errorMessage.title = 'Unauthorized access:';
        errorMessage.message = 'Something went wrong, please try again!';
      }
      if (response.status === 0) {
        errorMessage.title = 'Something went wrong.';
        errorMessage.message = 'Come back later.';


      }

      this.popup.confirm(errorMessage.title, errorMessage.message);

      return Observable.throw(response);
    });
  }

  private getStoredToken() {
    let token = localStorage.getItem('ca-token');
    return JSON.parse(token);
  }
}
