import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  isLogin:boolean=false;
  isValidUser: any;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.userService.userLogout();
    this.userService.isUserAuthorised$.subscribe((data)=>{
      this.isValidUser=data
    })
  }

  signUpFormData(data:NgForm){
    this.userService.sentUserSingUpData(data.value).subscribe((data)=>{
      console.log(data);
     localStorage.setItem('userData',JSON.stringify(data));
      this.router.navigate(['/']);
    })
}

LoginFormData(data:NgForm) {

  this.userService.getDataForLogin(data.value).subscribe(data=>{
    console.log(data)
    if(data && data.length>=1){
      localStorage.setItem('userData',JSON.stringify(data))
      this.router.navigate(['/'])
      this.userService.setUserAuthorisedOrNot(false);
    }
    else{
      this.userService.setUserAuthorisedOrNot(true);
    }
  })

}

goToSignIn(){
this.isLogin=true
}

goToSignup() {
  this.isLogin=false
}

}
