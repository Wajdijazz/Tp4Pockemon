import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
  
  }

  submit() {
    this.authService.login(
      {
        email: this.form.value.email,
        password: this.form.value.password
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/team']);

      }
    });
  }
   
   
  }
