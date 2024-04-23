import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterFrontComponent } from './Front/footer-front/footer-front.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { FooterComponent } from './Back/footer/footer.component';
import { NavbarComponent } from './Back/navbar/navbar.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { HomeComponent } from './Front/home/home.component';
import { AddInsComponent } from './Components/add-ins/add-ins.component';
import { EditInsComponent } from './Components/edit-ins/edit-ins.component';
import { ShowInsComponent } from './Components/show-ins/show-ins.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllFrontComponent,
    HeaderComponent,
    FooterFrontComponent,
    AllBackComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomebackComponent,
    HomeComponent,
    AddInsComponent,
    EditInsComponent,
    ShowInsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
