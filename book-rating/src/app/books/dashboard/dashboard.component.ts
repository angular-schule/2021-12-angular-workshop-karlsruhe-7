import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // ACHTUNG: BUG wenn wir AJAX machen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(
    private br: BookRatingService,
    private bs: BooksService) {

      this.bs.booksGet().subscribe(books => this.books = books);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.max(book.rating - 1, 1)
    // }
    this.updateAndSortBooks(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating! - a.rating!);
  }

  doAddBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
