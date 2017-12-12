import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BookComponent } from '../components/book/book.component';
import { BookPopupComponent } from '../components/book-popup/book-popup.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { BookListComponent } from '../components/book-list/book-list.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'book-gallery', pathMatch: 'full' },
    { path: 'book-gallery', component: HomeComponent },
    { path: 'book-list', component: BookListComponent},
    { path: 'book/:bookId', component: BookPopupComponent },
    { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
