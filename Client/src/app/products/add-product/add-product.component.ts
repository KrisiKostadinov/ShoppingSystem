import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  error: string = null;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }
  
  get price() {
    return this.productForm.get('price');
  }

  add() {
    if (this.productForm.valid) {
      this.productService.add({ ...this.productForm.value })
        .subscribe(data => {
          this.router.navigate(['/product/all']);
        });
    }
  }

}
