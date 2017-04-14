import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { AccountDetailPage } from '../pages/account-detail/account-detail';
import { CheckPointPage } from '../pages/check-point/check-point';
import { CheckMemberPage } from '../pages/check-member/check-member';
import { RegisterPage } from '../pages/register/register';
import { AcquisitionPage } from '../pages/acquisition/acquisition';
import { InsertAcquisitionPage } from '../pages/insert-acquisition/insert-acquisition';
import { InsertCanvasPage } from '../pages/insert-canvas/insert-canvas';
import { ListCanvasPage } from '../pages/list-canvas/list-canvas';

import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AccountPage,
    AccountDetailPage,
    CheckPointPage,
    CheckMemberPage,
    AcquisitionPage,
    InsertAcquisitionPage,
    InsertCanvasPage,
    ListCanvasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AccountPage,
    AccountDetailPage,
    CheckPointPage,
    CheckMemberPage,
    AcquisitionPage,
    InsertAcquisitionPage,
    InsertCanvasPage,
    ListCanvasPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
