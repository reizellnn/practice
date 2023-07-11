import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any[] = [];

  user: any = {};

  constructor(private router: Router, private dataService: DataService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateAppPages();
      }
    });
  }

  ngOnInit() {
    this.updateAppPages();

    let userID = localStorage.getItem('userId')?.toString();

    if (userID) {
      this.user = this.dataService.getUserDetails(userID);
    }
  }

  updateAppPages() {
    if (localStorage.getItem('userType') === 'staff') {
      this.appPages = [
        { title: 'Dashboard', url: '/folder/dashboard', icon: 'analytics' },
        { title: 'Accounts', url: '/folder/accounts', icon: 'wallet' },
        { title: 'Set Bill', url: '/folder/set-bill', icon: 'receipt' },
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
