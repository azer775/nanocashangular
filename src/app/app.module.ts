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
import {HttpClientModule } from '@angular/common/http';
import { PacksComponent } from './Back/packs/packs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormpackComponent } from './Back/formpack/formpack.component';
import { FormContractComponent } from './Back/formContract/formContract.component';
import { FormProjectComponent } from './Front/form-project/form-project.component';
import { ContractComponent } from './Back/contract/contract.component';
import { ProjectComponent } from './Front/project/project.component';
import { InvestmentComponent } from './Front/investisement/investisement.component';
import { ForminvestementComponent } from './Front/form-investement/form-investement.component';
import { EditContractComponent } from './Back/editFormContract/editContract.component';




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
    PacksComponent,
    FormpackComponent,
    FormContractComponent,
    FormProjectComponent,
    ForminvestementComponent,
    ContractComponent,
    ProjectComponent,
    InvestmentComponent,
    EditContractComponent,  
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
