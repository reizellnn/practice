import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  totalUsers: number = 0;
  unpaidBills: number = 0;

  yearlyConsumption: number = 0;

  totalIncome: number = 0;

  ngOnInit() {
    //this.dataService.users .length;
    this.totalUsers = this.dataService.users.length;
    //loop through the users and and loop through the transactions of each user then check the title in transaction and if it is Failed or Not Paid then increment the unpaidBills variable
    for (let i = 0; i < this.dataService.users.length; i++) {
      for (let j = 0; j < this.dataService.users[i].transactions.length; j++) {
        this.totalIncome += this.dataService.users[i].transactions[j].amount;
        this.yearlyConsumption +=
          this.dataService.users[i].transactions[j].consumption;
        if (
          this.dataService.users[i].transactions[j].title == 'Failed' ||
          this.dataService.users[i].transactions[j].title == 'Not Paid'
        ) {
          this.unpaidBills++;
        }
      }
    }
  }
}
