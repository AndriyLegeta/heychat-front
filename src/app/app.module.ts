import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthorizationModule} from "./modules/authorization.module";
import {AuthRoutingModule} from "./modules/auth-routing.module";
import {StreamsModule} from "./modules/streams.module";
import {StreamsRoutingModule} from "./modules/streams-routing.module";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./services/token-interceptor";

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    AuthRoutingModule,
    StreamsModule,
    StreamsRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
