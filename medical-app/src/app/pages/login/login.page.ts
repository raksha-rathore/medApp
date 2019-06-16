import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public imgURL = '../../assets/images/logo.png';
  constructor(public router: Router) {
  }

  ngOnInit() {}

  onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
  }
}
