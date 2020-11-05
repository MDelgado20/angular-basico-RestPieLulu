import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestPieLuluComponent } from './rest-pie-lulu/rest-pie-lulu.component';

@NgModule({
  declarations: [
    AppComponent,
    RestPieLuluComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
