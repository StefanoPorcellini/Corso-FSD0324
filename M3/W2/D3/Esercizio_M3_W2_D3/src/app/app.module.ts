import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { PrefComponent } from './Pages/pref/pref.component';
import { NavbarComponent } from './MainComponent/navbar/navbar.component';
import { CarrelloComponent } from './Pages/carrello/carrello.component';
import { CardsComponent } from './Components/cards/cards.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrefComponent,
    NavbarComponent,
    CarrelloComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
