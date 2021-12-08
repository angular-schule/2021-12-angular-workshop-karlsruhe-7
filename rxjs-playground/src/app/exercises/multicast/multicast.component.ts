import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, shareReplay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Subject<number>; // später: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /**************!!**************/

    // 1. alles kalt
    // this.measureValues$ = this.mvs.getValues();

    // 2. multicast (daten teilen)
    // this.measureValues$ = this.mvs.getValues().pipe(
    //   // share() // Subject
    //   shareReplay(1) // ReplaySubject(1)
    // )


    // 3. please try out:
    // - Subject
    // - BehaviorSubject
    // - ReplaySubject
    this.measureValues$ = new Subject<number>();
    this.mvs.getValues().subscribe(this.measureValues$);

    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
