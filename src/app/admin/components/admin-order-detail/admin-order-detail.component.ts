import { OrderServiceService } from './../../../shared/services/order-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {
  order$;
  id: string;

  constructor(private route: ActivatedRoute, private orderService: OrderServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  async ngOnInit() {
    if(this.id) this.order$ = await this.orderService.getOrderById(this.id);
  }

}
