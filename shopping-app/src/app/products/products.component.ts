import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : any;

  constructor(private productService: ProductsService) {} // inject a service here

  ngOnInit() {
    // this.productService.getProducts()
    // .subscribe(res=>{this.Products=res;
    //   console.log(this.Products);
    // });
    this.getProducts();
   
    
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(res=>{this.products=res;
    console.log(this.products)
  });
    
  }

}
