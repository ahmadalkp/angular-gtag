import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { Angulartics2Module } from 'angulartics2';
import { FormsModule } from '@angular/forms';
import { GtagModule } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    // GtagModule.forRoot({ trackingId: 'G-TBX2CD8HSE', trackPageviews: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
