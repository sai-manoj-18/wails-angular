import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormField } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { StocksDashboardComponent } from './stocks-dashboard/stocks-dashboard.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonCardComponent } from './common-card/common-card.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    StocksDashboardComponent,
    StocksDetailComponent,
    CommonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    LoginService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
