import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        CommonModule
    ]
})
export class ContactRoutingModule { }