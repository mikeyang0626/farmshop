import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AuthService) {
    
   }

  ngOnInit() {
  }
  login(){
    this.afAuth.login();
  }
}
