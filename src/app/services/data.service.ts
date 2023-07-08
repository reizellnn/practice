import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public users: any[] = [
    {
      id: 'WWMS00001',
      name: 'Jane Smith',
      username: 'janesmith',
      contact: '+9876543210',
      password: 'mypassword123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          consumption: 101,
          rate: 20.3,
          amount: 2050.3,
          paymentDate: '2023-07-05',
        },
        {
          title: 'Failed',
          date: 'June 2023',
          consumption: 75,
          rate: 20.3,
          amount: 1522.5,
          paymentDate: '',
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
          consumption: 90,
          rate: 20.3,
          amount: 1827,
          paymentDate: '2023-05-10',
        },
        {
          title: 'Not Paid',
          date: 'August 2023',
          consumption: 101,
          rate: 20.3,
          amount: 2050.3,
          paymentDate: '',
        },
      ],
    },
    {
      id: 'WWMS00002',
      name: 'Mark Johnson',
      username: 'markjohnson',
      contact: '+5555555555',
      password: 'password123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          consumption: 150,
          rate: 20.3,
          amount: 3045,
          paymentDate: '2023-07-03',
        },
        {
          title: 'Payment Successful',
          date: 'June 2023',
          consumption: 110,
          rate: 20.3,
          amount: 2233,
          paymentDate: '2023-06-15',
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
          consumption: 85,
          rate: 20.3,
          amount: 1725.5,
          paymentDate: '2023-05-20',
        },
        {
          title: 'Failed',
          date: 'April 2023',
          consumption: 60,
          rate: 20.3,
          amount: 1218,
          paymentDate: '',
        },
      ],
    },
    {
      id: 'WWMS00003',
      name: 'Jane Smith',
      username: 'janesmith',
      contact: '+9876543210',
      password: 'mypassword123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          consumption: 100,
          rate: 20.3,
          amount: 2030,
          paymentDate: '2023-07-02',
        },
        {
          title: 'Failed',
          date: 'June 2023',
          consumption: 75,
          rate: 20.3,
          amount: 1522.5,
          paymentDate: '',
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
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

  login(email: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username == email &&
        this.users[i].password == password
      ) {
        localStorage.setItem('userId', this.users[i].id);
        localStorage.setItem('userType', 'user');
        return true;
      }
    }
    return false;
  }

  getTransactions(userId: string, length: number) {
    let transactions: any[] = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        for (let j = 0; j < length; j++) {
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
        //loop through transactions
        for (let j = 0; j < this.users[i].transactions.length; j++) {
          if (this.users[i].transactions[j].title == 'Not Paid') {
            transaction = this.users[i].transactions[j];
          }
        }
      }
    }
    return transaction;
  }
}
