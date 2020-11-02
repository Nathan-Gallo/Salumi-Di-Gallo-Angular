import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../providers/register.service';
import { ModalService } from '../providers/modal.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private userName: string = '';
  private password: string = '';
  private passwordConfirm: string = '';

  private registerError: boolean = false;
  private errMsg: string = '';

  constructor(private registerService: RegisterService, private router: Router, private modalService: ModalService) { }

  onSubmit(): void {
    this.registerError = false;

    //Check password
    if (this.userName === '' || this.password === '') {
      this.registerError = true;
      this.errMsg = 'User name and password are required.'
    }
    else {

      if (this.password === this.passwordConfirm) {
        this.registerError = false;

        //auth service to post new user
        this.registerService.register(this.userName, this.password).subscribe(result => {
          console.log("New user created");
          console.dir(result)
        },
          error => {
            console.dir(error)
            this.registerError = true;
            this.errMsg = "Username is unavailable"
          },
          () => {
            this.openModal("successModal")
          })

      }
      else {
        this.registerError = true;
        this.errMsg = 'Passwords do not match.'
      }
    }


  }

  onReset(): void {
    this.registerError = false;
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.router.navigate(['login'])
  }
  ngOnInit() {
  }

}
