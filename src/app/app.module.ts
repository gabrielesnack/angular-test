import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AvatarComponent } from './components/avatars/avatar/avatar.component';
import { BoxComponent } from './components/grids/box/box.component';
import { GreenLanternCardComponent } from './components/cards/green-lantern-card/green-lantern-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GreenLanternCardComponent, AvatarComponent, BoxComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatGridListModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
