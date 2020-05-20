import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { OrderProduct } from 'src/app/core/models/order-product.model';

@Pipe({
  name: 'listOrder'
})
export class ListOrderPipe implements PipeTransform {

  obj: OrderProduct[] = [];

  transform(value: Product[]): OrderProduct[] {

    value.forEach(element => {
      const productIndex = this.obj.findIndex(product => product.id === element.id);

      if (productIndex < 0) {

        const obje: OrderProduct = {
          id: element.id,
          title: element.title,
          price: element.price,
          image: element.image,
          description: element.description,
          cant: 1,
          valorItem: element.price
        };
        this.obj.push(obje);

      } else {
        const obje = this.obj[productIndex];
        obje.cant += 1;
        obje.valorItem = obje.cant * obje.price;

        this.obj[productIndex] = obje;
      }
    });

    return this.obj;
  }
}
