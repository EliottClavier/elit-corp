import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public displayError: string = '';
  public registerForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8),
        (control => this.loginService.confirmPassword(control, this.registerForm, 'password'))
      ]],
    });
  }

  public register(): void {
    this.displayError = '';
    this.loginService.register({
      email: this.registerForm.controls["email"].value,
      password: this.registerForm.controls["password"].value
    }).then(
      res => {
        if (res) {
          this.router.navigateByUrl("films-list")
        } else {
          this.displayError = 'Account already exists'
        }
      }
    )
  }
}
