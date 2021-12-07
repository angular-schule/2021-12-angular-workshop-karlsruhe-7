import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // Gruppenarbeit
    // 1. Erzeuge ein Event mit dem Namen `create`
    // 2. emitiere das Event mit dem neuen Buch
    // 3. (subscribe) dich im Dashboard auf das Event
    // 4. füge das Buch der Buch-Liste hinzu

    this.bookForm.reset();
  }
}
