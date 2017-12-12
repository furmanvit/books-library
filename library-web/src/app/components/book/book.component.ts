import { Component, Input } from '@angular/core';
import * as M from '../../app.models';
import { BookService } from '../../services/book/book.service';
import { CapitalizePipe } from '../../components/pipes/capitalize.pipe';

@Component({
  selector: 'book',
  templateUrl: 'book.component.html'
})


export class BookComponent {
  @Input() existBook: M.Book;

  constructor(private bookService: BookService) { }

  deleteBook(existBook: M.Book) {
    this.bookService.deleteBook(existBook, existBook.title);
  }
}
