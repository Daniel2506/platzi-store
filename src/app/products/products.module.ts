import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductAllComponent } from './components/products-all/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductAllComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }
