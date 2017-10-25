import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { MenuComponent } from './home/menu/menu.component';
import { CattleComponent } from './home/menu/cattle/cattle.component';
import { WeightComponent } from './home/menu/weight/weight.component';
import { ReportsComponent } from './home/menu/reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './home/login/auth.service';
import { CattleInfoComponent } from './home/menu/cattle/cattle-info/cattle-info.component';
import { AppService } from './app.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CattleComponent,
    WeightComponent,
    ReportsComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    CattleInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    AuthService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
