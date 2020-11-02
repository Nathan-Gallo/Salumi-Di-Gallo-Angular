import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string = "Salumi di Gallo";

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['register']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
