import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { TrackingIDInterceptorService } from './shared/interceptors/tracking-id.interceptor.service';
import { AuthorizationInterceptorService } from './shared/interceptors/authorization.interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TrackingIDInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
