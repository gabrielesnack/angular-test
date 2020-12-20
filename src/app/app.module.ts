import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreenLanternModule } from './modules/green-lantern/green-lantern.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, GreenLanternModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
