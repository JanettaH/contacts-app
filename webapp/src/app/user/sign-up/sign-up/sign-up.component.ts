import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ca-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  signup() {
    this.userService.signup(this.user.firstname, this.user.lastname, this.user.email, this.user.username, this.user.password).subscribe((result) => {
    });
  }
  cancel() {
    this.router.navigate(['/login']);
  }
}
