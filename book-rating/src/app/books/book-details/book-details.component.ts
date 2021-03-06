import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, retry, switchMap } from 'rxjs';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn!).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => of({
        title: 'ERROR',
        description: err.message
      }))
    ))
  );

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }
}
