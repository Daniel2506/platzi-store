import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '50',
      description: 'Creacion desde angular',
      price: 1500000,
      image: 'assets/images/banner-1.jpg',
      title: 'ANGULAR 50'
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }
  editProduct() {
    const newProduct: Partial<Product> = {
      id: '50',
      image: 'assets/images/banner-1.jpg',
      title: 'ANGULAR 200'
    }
    this.productsService.editProduct('1', newProduct).subscribe(product => {
      console.log(product);
    });
  }
  deleteProduct() {
    this.productsService.deleteProduct('50').subscribe(product => {
      console.log(product);
    });
  }
}
