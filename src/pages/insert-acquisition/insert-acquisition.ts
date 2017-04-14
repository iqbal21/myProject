import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the InsertAcquisition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-insert-acquisition',
  templateUrl: 'insert-acquisition.html'
})
export class InsertAcquisitionPage {
	
	token = '';
	status : any;
	createSuccess = false;
  	registerCredentials = {name: '', firstname: '', lastname: '', email: '', mobilephone: '', homephone: '', externalid: '', address: '', City: '', postalcode: '', submitdate: '', dob: ''};
  	

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private http:Http) {}

  public register() {
    var tokenInfo = this.auth.getTokenInfo(); 
    	this.token = tokenInfo.access_token;

    //API Check Point
      var urlCheckPoint ='https://ap2.salesforce.com/services/apexrest/acquisition/params';
    
        let acqBodyRequest2 = {
            name: this.registerCredentials.name,
            firstname: this.registerCredentials.firstname,
            lastname: this.registerCredentials.lastname,
            email: this.registerCredentials.email,
            mobilephone: this.registerCredentials.mobilephone,
            homephone: this.registerCredentials.homephone,
            externalid: this.registerCredentials.externalid,
            address: this.registerCredentials.address,
            City: this.registerCredentials.City,
            postalcode: this.registerCredentials.postalcode,
            submitdate: this.registerCredentials.submitdate,
            dob: this.registerCredentials.dob
            
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
                      
                  });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.nav.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertAcquisitionPage');
  }

}
