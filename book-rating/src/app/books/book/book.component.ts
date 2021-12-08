import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input()
  book?: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  get stars(): undefined[] {
    return new Array(this.book?.rating);
  }

  /* istanbul ignore next */
  doRateDown() {
    this.rateDown.next(this.book!);
  }

  /* istanbul ignore next */
  doRateUp() {
    this.rateUp.next(this.book!);
  }

  log() {
    console.log('change detection', new Date())
  }
}
