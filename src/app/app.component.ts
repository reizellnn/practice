/** @format */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  user: any = {};
  ngOnInit() {
    //get from local storage if user is admin or not,i s usser set to false for now
    const isAdmin = localStorage.getItem('userType') == 'user' ? false : true;

    if (isAdmin) {
      this.appPages = [
        { title: 'Dashboard', url: '/dashboard', icon: 'analytics' },
        { title: 'Accounts', url: '/folder/accounts', icon: 'wallet' },
        {
          title: 'Transactions',
          url: '/transactions',
          icon: 'swap-horizontal',
        },
      ];
    } else {
      this.appPages = [
        { title: 'Home', url: '/folder/home', icon: 'home' },
        {
          title: 'Transactions',
          url: '/folder/transactions',
          icon: 'swap-horizontal',
        },
        { title: 'Bill', url: '/folder/bills', icon: 'document-text' },
      ];
    }

    let userID = localStorage.getItem('userId')?.toString();

    if (userID) {
      this.user = this.dataService.getUserDetails(userID);
    }
  }

  showSidebar(): boolean {
    if (
      window.location.pathname == '/login' ||
      window.location.pathname == '/signup'
    ) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
