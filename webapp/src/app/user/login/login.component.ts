import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {nextTick} from 'q';
import {Router} from '@angular/router';
import {PopupService} from '../../popup/popup/popup.service';
import {error} from 'util';

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

  constructor(private userService: UserService, private router: Router, private popup: PopupService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe((result) => {

    });
  }
}
