import { OrderServiceService } from 'shared/services/order-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;

  constructor(private orderService: OrderServiceService) { 
    this.orders$ = this.orderService.getOrders();
  }

}
