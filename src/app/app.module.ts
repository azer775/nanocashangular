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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormpackComponent } from './Back/formpack/formpack.component';
import { LoansComponent } from './Back/loans/loans.component';
import { FormloanComponent } from './Front/formloan/formloan.component';
import { StatsComponent } from './Back/stats/stats.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TestfileComponent } from './testfile/testfile.component';
import { ChatComponent } from './Back/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { VideocallComponent } from './videocall/videocall.component';
import { PacksfrontComponent } from './Front/packsfront/packsfront.component';
import { SimilationFrontComponent } from './Front/similation-front/similation-front.component';

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
    LoansComponent,
    FormloanComponent,
    StatsComponent,
    TestfileComponent,
    ChatComponent,
    VideocallComponent,
    PacksfrontComponent,
    SimilationFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    BrowserAnimationsModule,
    
    
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
