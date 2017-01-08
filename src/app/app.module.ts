import { HomePage } from './../pages/home/home';
import { ConstantService } from './../providers/constant-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginService } from '../providers/login-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService, ConstantService]
})
export class AppModule { }
