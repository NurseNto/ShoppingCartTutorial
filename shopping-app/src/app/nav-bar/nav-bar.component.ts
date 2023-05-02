import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  cart: any;
    constructor(private test2: CartService) {}

    getme(){
      this.test2.getItems();
    }
}
