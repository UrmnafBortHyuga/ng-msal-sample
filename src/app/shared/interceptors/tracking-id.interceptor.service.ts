import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TrackingIDInterceptorService implements HttpInterceptor {

  trackingID: string;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = this.trackingID ? req.clone({
      // Authorizationヘッダーにトークン文字列をセットする
      headers: req.headers.set('X-Ai21-Transaction-Id', this.trackingID),
    }) : req.clone();
    return next.handle(newReq)
      .pipe(
        tap((res: HttpResponse<any>) => {
          if (res.type === HttpEventType.Response) {
            this.trackingID = res.headers.get('X-Ai21-Transaction-Id');
          }
        }),
      );
  }
}
