import { ShoppingCart } from 'shared/shopping-cart';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Order } from 'shared/order';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderServiceService } from 'shared/services/order-service.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  
  shipping = {};
  userSubscription: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private orderService: OrderServiceService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe( user => this.userId = user.uid );
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}