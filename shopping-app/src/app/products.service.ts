import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

prodURL : string = 'https://fakestoreapi.com/products';  // URL to web api

constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get<any>(this.prodURL)
}

}
