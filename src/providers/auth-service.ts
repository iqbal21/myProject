import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


export class User {
    name: string;
    email: string;
    address: string;

    constructor (name: string, email: string, address: string,){
      this.name = name;
      this.email = email;
      this.address = address;
    }
}

export class Token {
    access_token: string;
    id: string;
    instance_url: string;
    issued_at: string;
    signature: string;
    token_type: string;

    constructor (access_token: string, id: string, instance_url: string,
        issued_at: string, signature: string, token_type: string){
      this.access_token = access_token;
      this.id = id;
      this.instance_url = instance_url;
      this.issued_at = issued_at;
      this.signature = signature;
      this.token_type = token_type;

    }
}


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  currentUser : User;
  currentToken : Token;
  //currentAddress : Address;

  public login(credentials) {
    if (credentials.email==null || credentials.password ==null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer =>{
        // At this point make a request to your backend to make a real check!

        var sfurl = 'https://ap2.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9ZL0ppGP5UrBdVmLgOphdQWTQNNGMCXHISm6t5Q5CFlSrOaaiNUJPfCyKD1k7yGT6tHOAK3.mgBALg4EX&client_secret=4026637275546905092&username=API@saastenloyalty.com&password=saastenloyalty2016UCSkv6cXda6VacvqfuA2uaOy2';
        var req = JSON.stringify({
                     method: 'POST',
                     url: sfurl,
                     headers: new Headers()
                   });
        var options= new RequestOptions({headers: new Headers(), method: 'POST'});

        // --- tutup sementara
        this.http.post(sfurl, '', options)
                  .map(res => res.json())
                  .subscribe( (data) =>  {
                                this.currentToken = new Token(data.access_token, data.id, data.instance_url, data.issued_at,
                                    data.signature, data.token_type);
                                //this.token = data.access_token;
                                console.log(data);

                                var access = (credentials.password === "user" && credentials.email === "user");
                                //this.sfoauth();

                                this.currentUser = new User('Iqbal', 'Iqbal@gmail.com', 'Bekasi');
                                //this.currentAddress = new Address('Iqbal', 'Iqbal@gmail.com');
                                observer.next(access);
                                observer.complete();


                              },
                              err=>{console.log("Error!:", err.json());}
                            );



        /*
        this.currentToken = new Token('data.access_token: 1234567890', 'data.id', 'data.instance_url', 'data.issued_at',
            'data.signature', 'data.token_type');
        var access = (credentials.password === "admin" && credentials.email === "admin");

        this.currentUser = new User('Doddy', 'doddy.prima@gmail.com');
        observer.next(access);
        observer.complete();
        */


      });
    }
  }


/*  public sfoauth(){
    var sfurl = 'https://ap2.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9ZL0ppGP5UrBdVmLgOphdQWTQNNGMCXHISm6t5Q5CFlSrOaaiNUJPfCyKD1k7yGT6tHOAK3.mgBALg4EX&client_secret=4026637275546905092&username=API@saastenloyalty.com&password=saastenloyalty2016UCSkv6cXda6VacvqfuA2uaOy2';
    var req = JSON.stringify({
                 method: 'POST',
                 url: sfurl,
                 headers: new Headers()
               });
    var options= new RequestOptions({headers: new Headers(), method: 'POST'});

    this.http.post(sfurl, '', options)
              .map(res => res.json())
              .subscribe( (data) =>  {
                            this.currentToken = new Token(data.access_token, data.id, data.instance_url, data.issued_at,
                                data.signature, data.token_type);
                            //this.token = data.access_token;
                            console.log(data);
                          },
                          err=>{console.log("Error!:", err.json());}
                        );

  }*/

  /*public getAccount() : Account{


  }*/

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }


  public getUserInfo() : User {
    return this.currentUser;
  }

  /*public getAddressInfo() : Address {
    return this.currentAddress;
  }*/

  public getTokenInfo() : Token {
    return this.currentToken;
  }

  public logout() {
      return Observable.create(observer => {
        this.currentUser = null;
        observer.next(true);
        observer.complete();
      });
    }


  constructor(public http: Http) {
    this.http = http;
    console.log('Hello AuthService Provider');
  }

}
