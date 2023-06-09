import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  prod: Product[] = [];
  constructor(private products: ProductsService) { }

  addToCart(item: Product ) {
    this.prod.push(item)
    console.log(item);
    
  }

  getItems() {
    return this.prod;

  }

  clearCart() {
    this.prod = [];
    return this.prod;
  }

  deleteItem(id: number) {
    this.prod.splice(id,1);
  }
}
