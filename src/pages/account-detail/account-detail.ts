import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { AccountDetailPage } from '../account-detail/account-detail';

/*
  Generated class for the AccountDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-detail',
  templateUrl: 'account-detail.html'
})
export class AccountDetailPage {

  	
  constructor(public navCtrl: NavController, private auth: AuthService, private http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountDetailPage');
  }

}
