import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {PopupService} from '../../popup/popup/popup.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  disableSelect = new FormControl(false);

  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router, private popup: PopupService) {
  }

  ngOnInit() {
  }

  login() {
    const userName = this.user.username + '@janettahuobonenhotmail.onmicrosoft.com';
    this.userService.login(userName, this.user.password).subscribe((result) => {
      this.router.navigate(['/ca/contact']);
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
