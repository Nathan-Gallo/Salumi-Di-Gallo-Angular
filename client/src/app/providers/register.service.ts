import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private usersEndpoint: string = 'http://localhost:8081/api/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  
  register(userName: string, password: string): Observable<any> {
    return this.http.post(this.usersEndpoint, { username: userName, password: password }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  constructor(private http: HttpClient) { }
}
