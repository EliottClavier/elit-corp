import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public displayError: string = '';
  public loginForm: FormGroup;

  constructor(
    public router: Router,
    public loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public login(): void {
    this.displayError = '';
    this.loginService.login({
      email: this.loginForm.controls["email"].value,
      password: this.loginForm.controls["password"].value
    }).then(
      res => {
        if (res) {
          this.router.navigateByUrl("films-list")
        } else {
          this.displayError = 'ID / Password incorrect'
        }
      },
    )
  }

}
