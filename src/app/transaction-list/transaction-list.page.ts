import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  transactions: any[] = [];
  ngOnInit() {
    if (
      this.dataService.selectedUser == null ||
      this.dataService.selectedUser == undefined
    ) {
      this.router.navigateByUrl('/folder/accounts');
    }
    console.log(this.dataService.selectedUser.transactions);
    this.transactions = this.getTransactions();
  }

  getTransactions() {
    return this.dataService.selectedUser.transactions;
  }
}
