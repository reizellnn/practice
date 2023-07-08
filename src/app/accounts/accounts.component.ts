import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  ngOnInit(): void {
    this.users = this.dataService.users;
  }

  users: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  viewTransactions(user: any) {
    this.dataService.selectedUser = user;
    this.router.navigateByUrl('/transaction-list');
  }
}
