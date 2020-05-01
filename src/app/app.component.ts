import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'platzi-store';

    items = ['Item', 'Item', 'Rodriguez'];
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

    addItem() {
        this.items.push('Item');
    }

    deleteItem(index: number) {
        this.items.splice(index, 1);
    }
}
