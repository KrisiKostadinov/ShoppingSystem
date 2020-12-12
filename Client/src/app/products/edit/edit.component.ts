import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;
  productForm: FormGroup;
  error: string = null;
  id: string;

  constructor(private productService: ProductService,
    private router: Router,
    private rotue: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.rotue.snapshot.params.id;
    this.productService.byId(this.id)
      .subscribe(data => {
        this.product = data;
        this.productForm = this.fb.group({
          name: [data.name, Validators.required],
          description: [data.description, [Validators.required, Validators.minLength(20)]],
          price: [data.price, Validators.required]
        });
      });
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

  edit() {
    console.log(this.id);
    this.productService.edit(this.id, this.productForm.value)
      .subscribe(data => {
        this.router.navigate(['/product/all']);
      });
  }

}
