import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookPopupComponent } from './components/book-popup/book-popup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routing, appRoutingProviders } from './config/routes.config';
import { BookService } from './services/book/book.service';
import { NetService } from './services/net/net.service';
import { CapitalizePipe } from './components/pipes/capitalize.pipe';


@NgModule({
  declarations: [
    /* Components */
    HomeComponent,
    SiteHeaderComponent,
    BookListComponent,
    BookComponent,
    BookPopupComponent,
    PageNotFoundComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    
  ],
  providers: [appRoutingProviders,
    /* Services */
    BookService,
    NetService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
