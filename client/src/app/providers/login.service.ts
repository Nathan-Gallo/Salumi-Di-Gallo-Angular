import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;

  private usersEndpoint: string = 'http://localhost:8081/api/login/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getLoggedInStatus(): boolean {
    return this.loggedIn;
  }

  logOut(): void {
    this.loggedIn = false;
    this.router.navigate(['home']);
  }

  successfulLogin(): void {
    this.loggedIn = true;
    this.router.navigate(['recipes']);
  }

  validate(user: User): boolean {
    if (user.username != "") {
      if (user.password != "") {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  login(user: User): Observable<any> {
    return this.http.post(this.usersEndpoint, user , this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  constructor(private router: Router, private http: HttpClient) { }
}
