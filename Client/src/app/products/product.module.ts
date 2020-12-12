import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './all/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ByIdComponent } from './by-id/by-id.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ByIdComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
  ]
})
export class ProductModule { }
