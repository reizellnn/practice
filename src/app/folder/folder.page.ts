import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //acee locl storage for user id, if it not there, redirect to login page
    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/login']);
    }
    this.showSuccessAlert();
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  async showSuccessAlert() {
    if (localStorage.getItem('showAlert') === 'true') {
      const alert = await this.alertController.create({
        header: 'Login Successful',
        message: 'You have successfully logged in.',
        buttons: ['OK'],
      });

      await alert.present();
    }
    localStorage.setItem('showAlert', 'false');
  }
}
