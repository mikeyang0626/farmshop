import { ShoppingCart } from 'shared/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/app-user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fs-navbar',
  templateUrl: './fs-navbar.component.html',
  styleUrls: ['./fs-navbar.component.css']
})
export class FsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private cartService: ShoppingCartService) { 
  
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ =  await this.cartService.getCart();
  }
  logout(){
    this.auth.logout();
  }
}
