import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'environments/environment';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/components/about/about.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ShoppingModule,
    SharedModule,
    AdminModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    
    RouterModule.forRoot([
      {path: '', component: ProductsComponent },
      {path: 'login', component: LoginComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'about', component: AboutComponent},
      
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
