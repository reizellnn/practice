/** @format */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any[] = [];

  constructor(private router: Router) {}

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
