import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';

import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuardService ]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [ AuthGuardService ]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthGuardService ]},
      {path: 'my/orders/:id', component: OrderDetailComponent, canActivate: [ AuthGuardService ]}
      
    ])
  ],
  declarations: [
    CartSummaryComponent,
    ShippingFormComponent,
    ProductFilterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    OrderDetailComponent,
  ]
})
export class ShoppingModule { }
