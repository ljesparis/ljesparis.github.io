import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { SanitizeHtmlPipe } from './common/pipes/safe_html_pipe';
import { HeaderComponent } from './common/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
