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

  constructor(private dataService: DataService) {
    let userID = localStorage.getItem('userId')?.toString();

    if (userID) {
      this.balance = this.dataService.getBalance(userID);
    }

    console.log(this.balance);
  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction() {
    let userID = localStorage.getItem('userId')?.toString();
    if (userID) {
      this.transactions = this.dataService.getTransactions(userID, 3);
    }
  }

  formatDate(paymentDate: string): string {
    //if valid date

    if (!paymentDate) {
      return '';
    }

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

  getUpdatedDate(date: string, numberOfDaysToAdd: number): string {
    const dateParts = date.split('-');
    const month = Number(dateParts[0]) - 1;
    const day = Number(dateParts[1]);
    const year = Number(dateParts[2]);

    const currentDate = new Date(year, month, day);
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);

    return `${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}-${currentDate.getFullYear()}`;
  }
}
