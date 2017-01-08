import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConstantService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConstantService {

ServiceUrl: string;
LoadTimeSheetUrl: string;
LoadWeekViewUrl:string;
SaveTimeSheetUrl:string;
LoginUrl:string;
UserDetailsUrl:string;
SuccessReponse:string;
Ok:string;
Credentials:string;

  constructor() {
    //this.ServiceUrl= "http://localhost:64577";
    this.ServiceUrl= "https://test-erms.azurewebsites.net";
    this.LoadTimeSheetUrl= "/api/TimeSheetApi/LoadTimeSheet?date=";
    this.LoadWeekViewUrl= "/api/TimeSheetApi/WeekViewTimeSheet?date=";
    this.SaveTimeSheetUrl= "/api/TimeSheetApi/UpdateMobileTimeSheet?date=";
    this.LoginUrl= "/api/LoginApi/Login";
    this.UserDetailsUrl="/api/UserDetailsApi/UserDetails";
    this.SuccessReponse= "SUCCESS";
    this.Ok= "OK";
    this.Credentials= "Credentials";
  }

}
