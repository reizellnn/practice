import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  transactions: any = [];

  ngOnInit() {
    this.transactions = this.getTransactions();
  }

  getTransactions() {
    let transactions: any[] = [];
    let userId = localStorage.getItem('userId');
    if (userId != null) {
      transactions = this.dataService.getAllTransactions(userId);
    }
    return transactions;
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

  searchTerm: string = '';

  handleInput(event: any) {
    //loop every ion-label, get all tags and check if it contains the search term
    const labels = Array.from(document.querySelectorAll('.transaction-label'));
    labels.forEach((label) => {
      const item = label.parentElement;
      if (item == null || label.textContent == null) {
        return;
      }
      if (label.textContent.toLowerCase().indexOf(event.target.value) > -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}
