import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  password: string = '';
  name: string = '';
  contact: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  errorMessages: string = '';

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/folder/home']);
    }
  }

  signup() {
    if (
      this.username != '' &&
      this.password != '' &&
      this.name != '' &&
      this.contact != ''
    ) {
      if (
        this.dataService.signup(
          this.username,
          this.password,
          this.name,
          this.contact
        )
      ) {
        this.errorMessages = '';
        this.router.navigate(['/login']);
      } else {
        this.errorMessages = 'Username already exists';
      }
    } else {
      this.errorMessages = 'Please fill all the fields';
    }
  }
}
