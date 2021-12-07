import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { DashboardComponent } from './dashboard.component';

// @Component({
//   selector: 'br-book',
//   template: '',
// })
// export class MyDummyBookComponent {
// }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bookRatingMock = {
      rateDown: (b: Book) => b,
      // isRateDownAllowed: () => false
    }

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration Test
        // MyDummyBookComponent // Unit Test
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateDown() should forward all calls to BookRating service', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateDown').and.callThrough();

    const testBook = { isbn: '' } as Book;
    component.doRateDown(testBook)

    expect(rs.rateDown).toHaveBeenCalledOnceWith(testBook);
  });

  it('should add books to book list', () => {
    const testBook = {isbn: '004', title: "node.js"} as Book;
    component.doAddBook(testBook);

    expect(component.books).toContain(testBook);
  });
});
