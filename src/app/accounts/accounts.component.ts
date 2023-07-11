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

  handleInput(event: any) {
    //loop every ion-label, get all tags and check if it contains the search term
    const labels = Array.from(document.querySelectorAll('.account-label'));
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
