import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  logo: any = "../../assets/logo_ronde.jpg";
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_ngForm: NgForm) {
    console.log(_ngForm);
  }

  onRegister() { 
    this._router.navigateByUrl('/register');
    
  }
}
