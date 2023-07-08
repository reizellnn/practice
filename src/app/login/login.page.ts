import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/folder/home']);
    }
  }

  errorMessages: string = '';

  login() {
    if (this.username != '' && this.password != '') {
      if (this.dataService.login(this.username, this.password)) {
        this.errorMessages = '';
        this.router.navigate(['/folder/home']);
      } else {
        this.errorMessages = 'Invalid Credentials';
      }
    } else {
      this.errorMessages = 'Please fill all the fields';
    }
  }
}
