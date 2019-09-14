import { Component } from '@angular/core';












@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPage {

	userData:any;
	loginData = { email:'', password:'' };

  passwordtype:string='password';
  passeye:string ='eye';
  constructor(    ) {


      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

/*------------------
--------------------*/

// For User Login

 




  // Move to register page
 

  //Move to Home Page
 

 

managePassword() {
  if(this.passwordtype == 'password'){
    this.passwordtype='text';
    this.passeye='eye-off';
  }else{
    this.passwordtype='password';
    this.passeye = 'eye';
  }
}

}
