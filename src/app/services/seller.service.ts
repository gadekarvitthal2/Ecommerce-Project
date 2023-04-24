import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, SellerData } from '../seller';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn$=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  postDataToJson(data:any) :Observable<SellerData>{
    return this.http.post<SellerData>('http://localhost:3000/seller',data)
  }

  getDataFromJson():Observable<SellerData> {
    return this.http.get<SellerData>('http://localhost:3000/seller')
  }

  getUserAuth(username:string,password:string):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/seller?email=${username}&&password=${password}`,{observe:"response"})
  }

  IsUserAlreayLogin()  {
    if(localStorage.getItem('sellerLoginInfo')){
      this.isSellerLoggedIn$.next(true)
      this.router.navigateByUrl('seller-home')
    }
  }
}
