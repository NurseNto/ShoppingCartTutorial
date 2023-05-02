import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

prodURL : string = 'https://fakestoreapi.com/products';  // URL to web api

constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get<any>(this.prodURL);
}

addProducts(body: any) {
  return this.http.post<any>(this.prodURL, body);
}

editProduct(id: number, body: any) {
  return this.http.put<any>(this.prodURL+id, body);
}

deleteProducts(id: number) {
  return this.http.delete<any>(this.prodURL+id)
}

}
