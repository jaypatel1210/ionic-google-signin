import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  userInfo: User;
  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.afs.doc<User>(`users/${this.auth.getUID()}`)
    .valueChanges()
    .subscribe(
      (res) => {
        this.userInfo = res;
      }
    );
  }

  signOut() {
    this.auth.signOut();
  }

}
