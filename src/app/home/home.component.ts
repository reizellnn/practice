/** @format */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];

  balance: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let userID = localStorage.getItem('userId')?.toString();
    this.getTransaction();
    if (userID) {
      this.balance = this.dataService.getBalance(userID);
    }
  }

  getTransaction() {
    let userID = localStorage.getItem('userId')?.toString();
    if (userID) {
      this.transactions = this.dataService.getTransactions(userID, 3);
    }
  }

  formatDate(paymentDate: string): string {
    const date = new Date(paymentDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }

  formatDecimal(number: number): string {
    return number.toFixed(2);
  }
}
