import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from '../material/material.module';
import { ListOrderPipe } from './pipe/list-order/list-order.pipe';
import { TotalOrderPipe } from './pipe/total-order/total-order.pipe';


@NgModule({
  declarations: [
    OrderComponent,
    ListOrderPipe,
    TotalOrderPipe
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class OrderModule { }
