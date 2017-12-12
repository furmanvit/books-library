import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as M from '../../app.models';
import { BookService } from '../../services/book/book.service';
import { CapitalizePipe } from '../../components/pipes/capitalize.pipe';

@Component({
  selector: 'book',
  templateUrl: 'book.component.html'
})


export class BookComponent {
  @Input() existBook: M.Book;
  @Output() existBookSended = new EventEmitter();

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  deleteBook(existBook: M.Book) {
    this.bookService.deleteBook(existBook, existBook.title);
  }
}
