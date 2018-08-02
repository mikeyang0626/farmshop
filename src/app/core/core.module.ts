import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FsNavbarComponent } from './components/fs-navbar/fs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ ])
  ],
  declarations: [
    FsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    
  ],
  exports: [
    FsNavbarComponent
  ]
})
export class CoreModule { }
