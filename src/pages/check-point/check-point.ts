import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the CheckPoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check-point',
  templateUrl: 'check-point.html'
})
export class CheckPointPage {

	token = '';
	points : any;
	sfid : any;
	memberid : any;

  constructor(public navCtrl: NavController, private auth: AuthService, private http:Http) {

  		var tokenInfo = this.auth.getTokenInfo();
    	this.token = tokenInfo.access_token;

    //API Check Point
      var urlCheckPoint ='https://ap2.salesforce.com/services/apexrest/CheckPoint/params';
    
        let acqBodyRequest2 = {
            MemberID: 'Iqba7010506104Muha'
        }

        var headers2 = new Headers();

        headers2.append('Accept', 'application/json');
        headers2.append('Content-Type', 'application/json');
        headers2.append('Authorization', 'Bearer '+ this.token);
        
        let fetchOptions2 = { 
            method: 'POST', 
            body: acqBodyRequest2,
            headers: headers2
        }


        this.http.post(urlCheckPoint, '', fetchOptions2)
                  .map(res => res.json())
                  .subscribe( (data) =>  {
                      console.log(data);

                      this.points = data;
                      //this.sfid = data.SFId_Contact;
                      //this.memberid = data.MemberID;
                  });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPointPage');
  }

}
