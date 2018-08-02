import { OrderServiceService } from './../../shared/services/order-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order$;
  id;

  constructor(private route: ActivatedRoute, private orderService: OrderServiceService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.order$ = await this.orderService.getOrderById(this.id);
    console.log(this.order$);
  }

}
