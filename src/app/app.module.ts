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
import {HttpClientModule} from '@angular/common/http';
import { ShowTransactionsComponent } from './Back/show-transactions/show-transactions.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AddTransComponent } from './Back/add-trans/add-trans.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTransComponent } from './Back/edit-trans/edit-trans.component'; // Import ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './Front/dashboard/dashboard.component'; // MatSnackBarModule import





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
    FilterPipe,
    ShowTransactionsComponent,
    AddTransComponent,
    EditTransComponent,
    DashboardComponent,


  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
