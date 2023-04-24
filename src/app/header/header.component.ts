import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isOnseller:boolean=true
  menyType:string='default'
  sellerName:any
  constructor (private route:Router) {}
  ngOnInit(): void {
    this.route.events.subscribe((data:any)=>{
      if(data.url && data.url=='/seller-home'){
       this.menyType='seller'
      }
      if(localStorage.getItem('sellerLoginInfo')){
       const sellerInfo =localStorage.getItem('sellerLoginInfo')
        this.sellerName=sellerInfo && JSON.parse(sellerInfo)
        this.sellerName=this.sellerName[0].name
      }
    })
  }

  sellerLogout() {
    localStorage.removeItem('sellerLoginInfo');
    this.route.navigate(['/']);
  }

}
