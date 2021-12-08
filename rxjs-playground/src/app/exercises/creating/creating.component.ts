import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETE!')
    }

    // const observable = of('😃', '😍', '😎');

    // 2. Observable
    // 3. Subscriber
    const observable = new Observable<string>(subscriber => {

      subscriber.next('😃');
      const x = setTimeout(() => subscriber.next('😍'), 1000);

      // setTimeout(() => subscriber.error('ÄTSCH'), 1500);

      const y = setTimeout(() => subscriber.next('🤪'), 2000);
      // obs.error('BLUBB');
      const z = setTimeout(() => subscriber.complete(), 3000);

      return () => {
        this.log('UNSUBSCRIBED!');
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
      }
    });

    // 3. Subscription
    const subscription = observable.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1000);



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
