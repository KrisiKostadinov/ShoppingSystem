import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { isArray } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(data => {
        if(isArray(data)) {
          this.products = data;
        }
      });
  }

  addProduct() {
    this.router.navigate(['/product/add']);
  }

  byId(id) {
    this.router.navigate(['/product', id, 'details']);
  }

}
