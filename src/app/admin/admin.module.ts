import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminOrderDetailComponent } from './components/admin-order-detail/admin-order-detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [ AuthGuardService, AdminAuthGuardService ]},
      {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [ AuthGuardService, AdminAuthGuardService ]},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuardService, AdminAuthGuardService ]},
      {path: 'admin/orders/:id', component: AdminOrderDetailComponent, canActivate: [ AuthGuardService, AdminAuthGuardService ]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGuardService, AdminAuthGuardService ]}
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminOrderDetailComponent,
  ],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminModule { }
