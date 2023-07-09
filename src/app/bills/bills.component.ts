import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  unpaidBills: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getUnpaidBills();
    console.log(this.unpaidBills);
  }

  getUnpaidBills() {
    let userId = localStorage.getItem('userId');
    if (userId != null) {
      let transactions = this.dataService.getUnpaidTransactions(userId);
      this.unpaidBills = transactions;
    }
  }
}
