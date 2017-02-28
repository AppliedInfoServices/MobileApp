import { HomePage } from './../home/home';
import { ConstantService } from './../../providers/constant-service';
import { LoginService } from './../../providers/login-service';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  credentials = { username: "", password: "" };
  loginResponse: any;
  UserDetails: any;
  alertMessage: string;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private loginService: LoginService,
    private constants: ConstantService) {

  }

  isValidData() {
    if (!this.credentials.username || this.credentials.username.length === 0) {
      this.alertMessage = "Please enter Username.";
      return false;
    }

    if (!this.credentials.password || this.credentials.password.length === 0) {
      this.alertMessage = "Please enter Password.";
      return false;
    }
    return true;
  }

  getDetails() {
    this.loginService.getUserDetails(this.credentials.username)
      .subscribe(
      details => {
        this.UserDetails = details;
        console.log(this.UserDetails.UserName);
        this.navCtrl.push(HomePage, { details: this.UserDetails });
      },
      error => { this.alertMessage = error; });
  }

  login() {
    if (!this.isValidData()) {
      return;
    }
    this.loginService.getLoginContent(this.credentials)
      .subscribe(
      data => {
        this.loginResponse = data;
        if (this.loginResponse === this.constants.SuccessReponse) {
          this.getDetails();
        }
      },
      error => {
        this.alertMessage = error;
      });

  }
}
