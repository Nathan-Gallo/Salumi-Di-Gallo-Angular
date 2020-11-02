import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../providers/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isLoggedIn(): boolean {
    return this.loginService.getLoggedInStatus();
  }

  logOut(): void {
    this.loginService.logOut();
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  
  }

}
