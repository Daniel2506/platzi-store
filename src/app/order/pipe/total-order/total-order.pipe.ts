import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'totalOrder'
})
export class TotalOrderPipe implements PipeTransform {

  total = 0;
  transform(value: Product[]): number {

    value.forEach(element => {
      this.total += element.price;
    });

    return this.total;
  }

}
