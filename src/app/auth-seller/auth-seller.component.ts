import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerGuard } from '../seller.guard';
import { SellerData,Login } from '../seller';

@Component({
  selector: 'app-auth-seller',
  templateUrl: './auth-seller.component.html',
  styleUrls: ['./auth-seller.component.scss']
})
export class AuthSellerComponent implements OnInit{
constructor (private sellerService:SellerService,private router:Router,private guard:SellerGuard){}
isLogin:boolean=false;
isValidUsernamePassword:boolean=false
LoginFormdata={
  email:'',
  password:''
}
  ngOnInit(): void {
    this.sellerService.IsUserAlreayLogin();
  }

formAllSignupData(data:NgForm) {
  this.sellerService.postDataToJson(data.value).subscribe((data)=>{
    this.router.navigateByUrl('seller-home');
    localStorage.setItem('sellerLoginInfo',JSON.stringify(data))
    this.sellerService.isSellerLoggedIn$.next(true);
  },(error)=>{console.log(error)})
}

formAllSignInData(data:NgForm) {
let val=this.sellerService.getUserAuth(data.value.email,data.value.password).subscribe((data)=>{

    if(data.body && data.body.length && data){
      this.router.navigateByUrl('seller-home');
      localStorage.setItem('sellerLoginInfo',JSON.stringify(data.body))
      this.sellerService.isSellerLoggedIn$.next(true);
    }
    else{
      this.isValidUsernamePassword=true
    }
  // this.sellerService.isSellerLoggedIn$.next(true);
})
  //this is using
//   this.sellerService.getDataFromJson().subscribe(input=>{
//   let AllData:any=input;
//   let result = AllData.find((item:SellerData)=> item.email === data.value.email || item.password=== data.value.password);
//     if(result?.email==data.value.email && result?.password==data.value.password){
//         this.sellerService.isSellerLoggedIn$.next(true);
//         localStorage.setItem('sellerLoginInfo',JSON.stringify({email:data.value.email,password:data.value.password}));
//         this.router.navigateByUrl('seller-home');
//         console.log('login Success')
//     }
//     else{
//     // this.router.navigateByUrl('auth-seller')
//     alert('password not match')
//     this.isValidUsernamePassword=true
//     }
// })

}

goToSignIn() {
  this.isLogin=true
}

goToSignUp() {
this.isLogin=false
}
}
