import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSingUp } from '../seller';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserAuthorised$ = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  sentUserSingUpData(data:UserSingUp):Observable<UserSingUp>{
    return this.http.post<UserSingUp>('http://localhost:3000/users',data,{observe:'body'})
  }

  userLogout(){
   if( localStorage.getItem('userData')) {
    this.router.navigate(['/'])
   }
  }

  getDataForLogin(data:UserSingUp):Observable<UserSingUp[]> {
    return this.http.get<UserSingUp[]>(`http://localhost:3000/users?email=${data.email}&&password=${data.password}`,{observe:'body'})
  }

  setUserAuthorisedOrNot(item:boolean) {
    this.isUserAuthorised$.emit(item);
  }

}
