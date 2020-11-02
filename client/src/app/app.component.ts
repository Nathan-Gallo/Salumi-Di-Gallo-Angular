import { Component } from '@angular/core';


// @Component is a TypeDecerator telling Angular that this Class should be an Angular Component
// https://angular.io/api/core/Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salumi Di Gallo';
  loggedIn: boolean = false;

  checkValue() {
    console.log(this.loggedIn)
  }

  onActivate(componentReference) {
    console.log("componentReference: " + componentReference)
    console.log("componentReference.loggedIn " + componentReference.loggedIn)
    this.loggedIn = componentReference.loggedIn

    //componentReference.anyFunction();
 }

  receivedLoggedInStatus($event) {
    this.loggedIn = $event;
    console.log('From app.component: ' + this.loggedIn)
  }

  constructor() { }


}
