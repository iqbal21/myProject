import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the InsertCanvas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-insert-canvas',
  templateUrl: 'insert-canvas.html'
})
export class InsertCanvasPage {

	token = '';
	status : any;
	createSuccess = false;
  	//registerCredentials = {phone: '', category: '', ContactName: '', email: '', notes: '', product: '', status: '', username: ''};
  	registerCredentials = {phone: '', category: '', ContactName: '', email: '', notes: '', status: '', username: ''};
    

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private http:Http) {}

public register() {
    var tokenInfo = this.auth.getTokenInfo(); 
    	this.token = tokenInfo.access_token;

    //API Check Point
      var urlCheckPoint ='https://ap2.salesforce.com/services/apexrest/InsertCanvassing/params';
    
        let acqBodyRequest2 = {
            phone: this.registerCredentials.phone,
            category: this.registerCredentials.category,
            ContactName: this.registerCredentials.ContactName,
            email: this.registerCredentials.email,
            notes: this.registerCredentials.notes,
            //product: this.registerCredentials.product,
            status: this.registerCredentials.status,
            username: this.registerCredentials.username  
            
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertCanvasPage');
  }

}
