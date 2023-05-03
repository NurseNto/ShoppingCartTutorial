import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgIf } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  constructor(private cartSrv: CartService) {}
  items = this.cartSrv.getItems();

  deleteOne(id:number) {
    this.cartSrv.deleteItem(id);
  }
}
