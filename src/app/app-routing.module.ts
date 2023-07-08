/** @format */

import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'folder/home',
        pathMatch: 'full',
    },
    {
        path: 'folder/:id',
        loadChildren: () =>
            import('./folder/folder.module').then((m) => m.FolderPageModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then((m) => m.LoginPageModule),
    },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'transaction-list',
    loadChildren: () => import('./transaction-list/transaction-list.module').then( m => m.TransactionListPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
