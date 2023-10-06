import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: []
})
export class AppModule { }
