import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  // intervalCount = signal(0);
  // doubleInterval = computed(() => this.intervalCount() * 2);

  customInterval$ = new Observable((subscriber) => {
    let timesExquecuted = 0;

    const interval = setInterval(() => {
      if (timesExquecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }

      console.log('Emitting new value...');

      subscriber.next({ message: 'New value' });
      timesExquecuted++;
    }, 1000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Click count is: ${this.clickCount()} times`);
    // });
    toObservable(this.clickCount);
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.intervalCount.update((count) => count + 1);
    // }, 1000);

    console.log();
    // const subscription = interval(1000)
    //   .pipe(
    //     map((val) => val * 2), // คูณ 2
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Observable completed'),
      error: (err) => console.error('Error:', err),
    });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Click count is: ${this.clickCount()} times`),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onClick() {
    this.clickCount.update((count) => count + 1);
  }
}
