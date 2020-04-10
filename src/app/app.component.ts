import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Account } from '@azure/msal';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // TODO デモなので直接みているが、MSALのクラスをここに出さないように変える
  account: Account;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.login()
      .then(() => {
        this.account = this.auth.account;
      });
  }
}
