import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  operation = 'products/';
  constructor( private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}${this.operation}`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}${this.operation}${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}${this.operation}`, product);
  }

  editProduct(id: string, product: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}${this.operation}${id}`, product );
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}${this.operation}${id}`);
  }
}
