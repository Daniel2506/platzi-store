import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
    ],
    imports: [
        HomeRoutingModule
    ]
})
export class HomeModule { }
