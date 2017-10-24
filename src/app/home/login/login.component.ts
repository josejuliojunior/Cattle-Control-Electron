import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      const body = {
        email: email,
        password: password
      }
    console.log(body)
    this.authService.loginUser(body)
    .subscribe(
      (response: Response) => {
        let data = response.json();
        localStorage.setItem('token', data.data)
        this.router.navigate(['/menu'])
        },
      (error) => console.log(error)
    );
  }

}
