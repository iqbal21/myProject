import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { AccountPage } from '../account/account';
import { CheckPointPage } from '../check-point/check-point';
import { CheckMemberPage } from '../check-member/check-member';
import { AcquisitionPage } from '../acquisition/acquisition';
import { InsertAcquisitionPage } from '../insert-acquisition/insert-acquisition';
import { InsertCanvasPage } from '../insert-canvas/insert-canvas';
import { ListCanvasPage } from '../list-canvas/list-canvas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  token ='';
  address ='';

  private rootPage;
  private accountPage;
  private mainPage;
  private checkPointPage;
  private checkMemberPage;
  private acquisitionPage;
  private insertAcquisitionPage;
  private insertCanvasPage;
  private listCanvasPage;

  constructor(private nav: NavController, private auth: AuthService) {
    var info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
    this.address = info.address;

    var tokenInfo = this.auth.getTokenInfo();
    this.token = tokenInfo.access_token;

    this.accountPage = AccountPage;
    this.mainPage = HomePage;
    this.checkPointPage = CheckPointPage;
    this.checkMemberPage = CheckMemberPage;
    this.acquisitionPage = AcquisitionPage;
    this.insertAcquisitionPage = InsertAcquisitionPage;
    this.insertCanvasPage = InsertCanvasPage;
    this.listCanvasPage = ListCanvasPage;
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }

  public goToAccountPage() {
      this.nav.setRoot(AccountPage);
      //this.nav.push(AccountPage);
  }

  public goToCheckPointPage() {
      this.nav.push(CheckPointPage);
      
  }

  public goToCheckMemberPage() {
      this.nav.push(CheckMemberPage);
      
  }

  public goToAcquisitionPage() {
      this.nav.push(AcquisitionPage);
      
  }

  public goToInsertAcquisitionPage() {
      this.nav.push(InsertAcquisitionPage);
      
  }

  public goToInsertCanvasPage() {
      this.nav.push(InsertCanvasPage);
      
  }

  public goToListCanvasPage() {
      this.nav.push(ListCanvasPage);
      
  }

  openPage(p) {
      //this.rootPage = p;
      this.nav.setRoot(p);
    }

}
