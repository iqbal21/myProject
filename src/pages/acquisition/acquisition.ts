import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the Acquisition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-acquisition',
  templateUrl: 'acquisition.html'
})
export class AcquisitionPage {

	token = '';
	status : any;

  constructor(public navCtrl: NavController, private auth: AuthService, private http:Http) {

  	var tokenInfo = this.auth.getTokenInfo();
    	this.token = tokenInfo.access_token;

    //API Check Point
      var urlCheckPoint ='https://ap2.salesforce.com/services/apexrest/acquisition/params';
    
        let acqBodyRequest2 = {
            name: 'a',
            firstname: 'b',
            lastname: 'a',
            email: 'a@a.com',
            mobilephone: '08567908090',
            homephone: '0218008080',
            externalid: '1234567890',
            address: 'jl.',
            City: 'Bekasi',
            postalcode: '17510',
            submitdate: '25/1/2017',
            dob: '5/6/1975'
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

                      this.status = data.message;
                      //this.sfid = data.SFId_Contact;
                      //this.memberid = data.MemberID;
                  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcquisitionPage');
  }

}
