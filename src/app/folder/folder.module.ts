/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { HomeComponent } from '../home/home.component';

import { AccountsComponent } from '../accounts/accounts.component';

import { BillsComponent } from '../bills/bills.component';

import { TransactionsComponent } from '../transactions/transactions.component';

import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [
    FolderPage,
    HomeComponent,
    AccountsComponent,
    BillsComponent,
    TransactionsComponent,
    DashboardComponent,
  ],
})
export class FolderPageModule {}
