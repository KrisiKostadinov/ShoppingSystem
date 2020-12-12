import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.url;
  productAll = '/product';
  productAdd = '/product/add';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + this.productAll);
  }

  add(data): Observable<Product> {
    return this.http.post<Product>(this.url + this.productAdd, data);
  }

  byId(id): Observable<Product> {
    return this.http.get<Product>(this.url + `/product/${id}`);
  }

  edit(id, data): Observable<Product> {
    return this.http.post<Product>(this.url + `/product/edit/${id}`, data);
  }

  delete(id): Observable<Product> {
    return this.http.delete<Product>(this.url + `/product/delete/${id}`);
  }

}
