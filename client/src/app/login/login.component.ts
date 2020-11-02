import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../providers/login.service';
import { User } from '../models/user.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName: string = '';
  private password: string = '';

  private loginError: boolean = false;
  private errMsg: string = '';

  @Output() loggedInStatus = new EventEmitter<boolean>();
  private loggedIn: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }

  onSubmit(): void {
    let user = new User(this.userName, this.password)

    if (this.loginService.validate(user)) {
      this.loginService.login(user).subscribe(result => {
      },
        error => {
          console.dir(error);
          this.loginError = true;
          this.errMsg = "Username and password do not match"
        },
        () => {
          this.loggedIn = true;
          this.loggedInStatus.emit(this.loggedIn);
          console.log('From login.component: ' + this.loggedIn)
          this.loginService.successfulLogin()
        })
    }
  }

  ngOnInit() {
  }

}
