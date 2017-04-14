import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AccountDetailPage } from '../account-detail/account-detail';
/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  token = '';

  accounts : any;
  points : any;


  constructor(public navCtrl: NavController, private auth: AuthService, private http:Http ) {

    var tokenInfo = this.auth.getTokenInfo();
    this.token = tokenInfo.access_token;

    var sfurl ='https://ap2.salesforce.com/services/data/v32.0/query/?q=SELECT+name+from+Account+limit+3';
    
        let acqBodyRequest = {
            name: 'a'
        }

        var headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ this.token);
        
        let fetchOptions = { 
            method: 'GET', 
            body: acqBodyRequest,
            headers: headers
        }

        this.http.post(sfurl, '', fetchOptions)
                  .map(res => res.json())
                  .subscribe( (data) =>  {
                      console.log(data);

                      this.accounts = data.records;
                      
                  });  
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  public goToHomePage() {
      this.navCtrl.setRoot(HomePage);
  }

  public accountDetailPage() {
      this.navCtrl.push(AccountDetailPage);
  }


}
