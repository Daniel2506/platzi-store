import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductAllComponent } from './components/products-all/product.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductAllComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }
