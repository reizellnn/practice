import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public admin: any = [
    {
      id: 'admin001',
      name: 'Ammie Mallada',
      username: 'ammie',
      password: 'ammie',
    },
  ];

  public users: any[] = [
    {
      id: 'WWMS00001',
      name: 'Raizhell Ann Quijano',
      username: 'raizellnn',
      contact: '+9876543210',
      password: 'raIII760143',
      transactions: [
        {
          title: 'Payment Successful',
          date: '2023-04-01',
          consumption: 101,
          rate: 20.3,
          amount: 2050.3,
          paymentDate: '2023-07-05',
        },
        {
          title: 'Failed',
          date: '2023-05-01',
          consumption: 75,
          rate: 20.3,
          amount: 1522.5,
          paymentDate: '',
        },
        {
          title: 'Payment Successful',
          date: '2023-06-01',
          consumption: 90,
          rate: 20.3,
          amount: 1827,
          paymentDate: '2023-05-08',
        },
        {
          title: 'Not Paid',
          date: '2023-07-01',
          consumption: 101,
          rate: 20.3,
          amount: 2050.3,
          paymentDate: '',
        },
      ],
    },
    {
      id: 'WWMS00002',
      name: 'Charlene Gale Largado',
      username: 'charlene',
      contact: '+5555555555',
      password: 'charlene',
      transactions: [
        {
          title: 'Payment Successful',
          date: '2023-04-01',
          consumption: 150,
          rate: 20.3,
          amount: 3045,
          paymentDate: '2023-07-03',
        },
        {
          title: 'Payment Successful',
          date: '2023-05-01',
          consumption: 110,
          rate: 20.3,
          amount: 2233,
          paymentDate: '2023-06-15',
        },
        {
          title: 'Payment Successful',
          date: '2023-06-01',
          consumption: 85,
          rate: 20.3,
          amount: 1725.5,
          paymentDate: '2023-05-20',
        },
        {
          title: 'Failed',
          date: '2023-07-01',
          consumption: 60,
          rate: 20.3,
          amount: 1218,
          paymentDate: '',
        },
      ],
    },
    {
      id: 'WWMS00003',
      name: 'Mark Andrew Almario',
      username: 'andrew',
      contact: '+9876543210',
      password: 'andrew',
      transactions: [
        {
          title: 'Payment Successful',
          date: '2023-04-01',
          consumption: 100,
          rate: 20.3,
          amount: 2030,
          paymentDate: '2023-07-02',
        },
        {
          title: 'Failed',
          date: '2023-05-01',
          consumption: 75,
          rate: 20.3,
          amount: 1522.5,
          paymentDate: '',
        },
        {
          title: 'Payment Successful',
          date: '2023-06-01',
          consumption: 90,
          rate: 20.3,
          amount: 1827,
          paymentDate: '2023-05-08',
        },
      ],
    },
  ];

  public selectedUser: any = null;

  constructor() {}

  signup(email: string, password: string, name: string, contact: string) {
    let id = 'WWMS' + (this.users.length + 1).toString().padStart(5, '0');
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        id = 'WWMS' + (this.users.length + 1).toString().padStart(5, '0');
      }
    }
    let user = {
      id: id,
      name: name,
      username: email,
      contact: contact,
      password: password,
      transactions: [],
    };
    this.users.push(user);
    console.log(this.users);
    return true;
  }

  getFailedTransactions(userId: string) {
    let transactions: any = {};
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        for (let j = 0; j < this.users[i].transactions.length; j++) {
          if (this.users[i].transactions[j].title == 'Failed') {
            transactions.push(this.users[i].transactions[j]);
            break;
          }
        }
      }
    }
    return transactions;
  }

  login(email: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].username);

      if (
        this.users[i].username == email &&
        this.users[i].password == password
      ) {
        localStorage.setItem('userId', this.users[i].id);
        localStorage.setItem('userType', 'user');
        return true;
      }
    }

    for (let i = 0; i < this.admin.length; i++) {
      if (
        this.admin[i].username == email &&
        this.admin[i].password == password
      ) {
        localStorage.setItem('userId', this.admin[i].id);
        localStorage.setItem('userType', 'staff');
        return true;
      }
    }

    return false;
  }

  getTransactions(userId: string, length: number) {
    let transactions: any[] = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        for (let j = this.users[i].transactions.length - 1; j >= 0; j--) {
          transactions.push(this.users[i].transactions[j]);
          console.log(this.users[i].transactions[j]);
        }
      }
    }
    return transactions;
  }

  getAllTransactions(userId: string) {
    let transactions: any[] = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        transactions = this.users[i].transactions;
      }
    }
    return transactions;
  }

  getBalance(userId: string) {
    let transaction = {};

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        for (let j = this.users[i].transactions.length - 1; j >= 0; j--) {
          if (this.users[i].transactions[j].title == 'Not Paid') {
            transaction = this.users[i].transactions[j];
            break;
          } else if (this.users[i].transactions[j].title == 'Failed') {
            transaction = this.users[i].transactions[j];
            break;
          }
        }
      }
    }
    return transaction;
  }

  getUnpaidTransactions(userId: string) {
    let transactions: any = {};
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        for (let j = this.users[i].transactions.length - 1; j >= 0; j--) {
          if (this.users[i].transactions[j].title == 'Not Paid') {
            transactions.name = this.users[i].name;
            transactions.currentConsumption =
              this.users[i].transactions[j].consumption;
            transactions.previousConsumption =
              this.users[i].transactions[j - 1].consumption;
            transactions.date = this.users[i].transactions[j].date;
            let date = new Date(this.users[i].transactions[j].date);
            date.setDate(date.getDate() + 14);
            transactions.dueDate = date.toISOString().slice(0, 10);
            transactions.currentAmount = this.users[i].transactions[j].amount;
            transactions.rate = this.users[i].transactions[j].rate;
            break;
          } else if (this.users[i].transactions[j].title == 'Failed') {
            transactions.name = this.users[i].name;
            transactions.currentConsumption =
              this.users[i].transactions[j].consumption;
            transactions.previousConsumption =
              this.users[i].transactions[j - 1].consumption;
            transactions.date = this.users[i].transactions[j].date;
            let date = new Date(this.users[i].transactions[j].date);
            date.setDate(date.getDate() + 14);
            transactions.dueDate = date.toISOString().slice(0, 10);
            transactions.currentAmount = this.users[i].transactions[j].amount;
            transactions.rate = this.users[i].transactions[j].rate;
            break;
          }
        }
      }
    }
    return transactions;
  }

  getUserDetails(userId: string) {
    let user: any = {};
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        user = this.users[i];
      }
    }
    return user;
  }
}
