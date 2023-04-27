import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, SellerData } from '../seller';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isSearchResultFound$=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  postProductData(data:any):Observable<object> {
    return this.http.post<object>('http://localhost:3000/products',data)
  }

  getProductData():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  deleteProductItem(id:string):Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/products/'+id)
  }

  getProductsForHome():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3')
  }
  editProductData(product:Product):Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/'+product.id,product)
  }

  getTrendyProducts():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=7')
  }

  getSearchedTrendyProducts(data:string):Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${data}&&_limit=5`)
  }

  getSearchedProducts(data:string):Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${data}`)
  }

  getProductsForShow(id:string):Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }


  changeIsResultFound(item:boolean) {
    this.isSearchResultFound$.next(item);
  }
}
