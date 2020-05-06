import { NgModule } from '@angular/core';
import { ProductsDetailRoutingModule } from './product-detail-routing.module';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
    declarations: [
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductsDetailRoutingModule
    ]
})
export class ProductsDetailModule { }
