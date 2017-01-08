import { ConstantService } from './constant-service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {
  loginUrl: string;
  userDetailsUrl: string;
  constructor(public http: Http, private constants: ConstantService) {
    this.loginUrl = constants.ServiceUrl + constants.LoginUrl;
    this.userDetailsUrl = constants.ServiceUrl + constants.UserDetailsUrl;

  }

  public getLoginContent(credentials) {
    let requestData = JSON.stringify(credentials);
    let requestHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: requestHeaders });
    return this.http.post(this.loginUrl, requestData, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getUserDetails(userName: string) {
    let authToken = btoa(userName + ":true");
    let requestHeaders = new Headers({ 'AUTH_TOKEN': authToken, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: requestHeaders });
    return this.http.get(this.userDetailsUrl, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
