import { ConstantService } from './constant-service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileService {
profileUrl : string;
  constructor(public http: Http, private constants: ConstantService) {
    this.profileUrl = constants.ServiceUrl +  constants.LoadProfilesUrl;
  }

 public getContent(userName: string) {
    let authToken = btoa(userName + ":true");
    let requestHeaders = new Headers({ 'AUTH_TOKEN': authToken, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: requestHeaders });
    return this.http.get(this.profileUrl, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
