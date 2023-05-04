import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : any;

  constructor(private productService: ProductsService, private cart:CartService) {} // inject a service here

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(res=>{this.products=res;
    //console.log(this.products)
  });
    
  }

  add(product: Product) {
      this.cart.addToCart(product);
      window.alert('Your product has been added to the cart!');
      console.log(product);
      
  }




}
