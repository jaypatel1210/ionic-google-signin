import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  openGSign() {
    this.auth.googleSignup()
    .then(
      () => {
        this.router.navigateByUrl('/info');
      }
    );
  }
}
