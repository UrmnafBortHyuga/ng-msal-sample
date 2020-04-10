import { Injectable, NgZone } from '@angular/core';
import { UserAgentApplication, Account } from '@azure/msal';
import { AuthResponse } from '@azure/msal/src/AuthResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private userAgent: UserAgentApplication;

  // TODO 利用側から変えられるのでこれはダメ
  accessToken: string;
  account: Account;

  constructor() {
    // MSALREADMEには最低限ClientIdだけ設定と書いてあったが、authority、redirectUri設定しないと動かなかった
    const msalConfig = {
      auth: {
        clientId: environment.clientId,
        authority: `https://login.microsoftonline.com/${environment.directoryId}`,
        redirectUri: environment.redirectUri,
      },
    };
    this.userAgent = new UserAgentApplication(msalConfig);

  }


  async login() {
    this.account = await this.getUserAccount();
    this.accessToken = await this.getAccessToken();


  }

  private async getUserAccount(): Promise<Account> {
    // すでに認証が済んでいればキャッシュから返せる？ダメならポップアップ
    return this.userAgent.getAccount() ||
      await this.userAgent.loginPopup().then(res => res.account);
  }

  private async getAccessToken(): Promise<string> {
    const tokenRequest = {
      scopes: ['user.read'],
    };
    let authResponse: AuthResponse;
    try {
      authResponse = await this.userAgent.acquireTokenPopup(tokenRequest);
    } catch (e) {
      throw e;
    }
    return authResponse.accessToken;

  }
}
