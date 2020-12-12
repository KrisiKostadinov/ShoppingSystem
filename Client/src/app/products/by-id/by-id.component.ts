import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {

  product: Product;
  isDeleting: boolean = false;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    public user: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.byId(this.route.snapshot.params.id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product);
      });
  }

  edit(id) {
    this.router.navigate(['/product/', id, 'edit']);
  }

  delete() {
    this.isDeleting = true;
  }

  deleteCancel() {
    this.isDeleting = false;
  }

  deleteConfirm(id) {
    this.productService.delete(id)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/product/all']);
      });
  }

}
