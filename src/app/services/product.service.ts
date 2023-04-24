import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product, SellerData } from '../seller';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  postProductData(data:any):Observable<object> {
    return this.http.post<object>('http://localhost:3000/products',data)
  }

  getProductData():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  deleteProductItem(id:number):Observable<Product[]> {
    return this.http.delete<Product[]>('http://localhost:3000/products/'+id)
  }
}
