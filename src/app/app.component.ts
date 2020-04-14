import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Account } from '@azure/msal';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // TODO デモなので直接みているが、MSALのクラスをここに出さないように変える
  account: Account;

  hello: Observable<string>;

  constructor(private auth: AuthService, private http: HttpService) {
  }

  ngOnInit(): void {
    this.auth.login()
      .then(() => {
        this.account = this.auth.account;
      });
  }

  call() {
    this.hello = this.http.hello();
  }
}
