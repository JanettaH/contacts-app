import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {nextTick} from 'q';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe(() => {
      console.log('Navigate to app');
      this.router.navigate(['/ca/contact']);
    })


  }
}
