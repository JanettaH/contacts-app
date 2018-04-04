import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class UserService {

  constructor(private authService: AuthenticationService) { }

  login(username: string, password: string) {
    return this.authService.authenticate(username, password);

  }
  signup(firstname: string, lastname: string, email: string, username: string, password: string) {
    return this.authService.authenticate(username, password);
  }
}
