import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      image: 'assets/images/camiseta.png',
      price: 80000,
      description: 'Camiseta Platzi'
    },
    {
      id: '2',
      title: 'Hoodie',
      image: 'assets/images/hoodie.png',
      price: 80000,
      description: 'Hoodie Platzi'
    },
    {
      id: '3',
      title: 'Mug',
      image: 'assets/images/mug.png',
      price: 80000,
      description: 'Mug Platzi'
    },
    {
      id: '4',
      title: 'Pin',
      image: 'assets/images/pin.png',
      price: 80000,
      description: 'Pin Platzi'
    },
    {
      id: '5',
      title: 'Stickers 1',
      image: 'assets/images/stickers1.png',
      price: 80000,
      description: 'Sticker1 Platzi'
    },
    {
      id: '6',
      title: 'Sticker 2',
      image: 'assets/images/stickers2.png',
      price: 80000,
      description: 'Sticker2 Platzi'
    }
  ];
  constructor() { }
  ngOnInit() {
    //code
  }
  clickProduct(id: number) {
    console.log('clickProduct ' + id);
  }
}
