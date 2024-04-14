import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { NavbarComponent } from './Back/navbar/navbar.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { FooterComponent } from './Back/footer/footer.component';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { FooterFrontComponent } from './Front/footer-front/footer-front.component';
import { HeaderComponent } from './Front/header/header.component';
import { HomeComponent } from './Front/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBackComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AllFrontComponent,
    FooterFrontComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }