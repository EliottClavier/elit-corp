import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public login(): void {
    this.loginService.login({
      email: this.email,
      password: this.password
    }).then(
      res => res && (this.router.navigateByUrl("films-list")),
      err => console.log(err)
    )
  }
}
