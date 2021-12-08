import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, first } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth = 0;

  constructor() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
        // gut, weil pure
        map((e: Event) => (e.target as Window).innerWidth),

        // easy, aber leider "unpure"
        // map(() => window.innerWidth),

        startWith(1),
        debounceTime(1000),
        startWith(2),
      )
      .subscribe(width => this.currentWidth = width)


    /******************************/
  }

}
