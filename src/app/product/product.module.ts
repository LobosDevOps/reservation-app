import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
