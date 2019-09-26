import { Component,OnInit } from '@angular/core';


import { AlertController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
userId:any;
  constructor(public alertController: AlertController,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,private router:Router
   
  ) { }

 loginData = 
   {
     "userId":"2",
"email":"akash.kumar@gritsa.com",
"password":"123456"
   }
 

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
   
  }

  signIn(){
    
    var userData ={
      'email':this.onLoginForm.value.email,
      'password':this.onLoginForm.value.password
    }
    if(userData.email===this.loginData.email && userData.password===this.loginData.password){
    
    localStorage.setItem(this.loginData.userId, JSON.stringify(userData));
      this.router.navigateByUrl('/home')
    }
    else{
      this.presentAlert();
     
    }


  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      
      message: 'Enter a valid credentials',
      buttons: ['OK']
    });

    await alert.present();
  }

  // // //


}

// export class LoginPage {

// 	userData:any;
// 	loginData = { email:'', password:'' };

//   passwordtype:string='password';
//   passeye:string ='eye';
//   constructor(    ) {


      
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }

/*------------------
--------------------*/

// For User Login

 




  // Move to register page
 

  //Move to Home Page
 

 

// managePassword() {
//   if(this.passwordtype == 'password'){
//     this.passwordtype='text';
//     this.passeye='eye-off';
//   }else{
//     this.passwordtype='password';
//     this.passeye = 'eye';
//   }
// }

// }
