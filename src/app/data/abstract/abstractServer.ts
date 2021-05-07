// import { Subject, BehaviorSubject, Subscription } from 'rxjs';

// export class BaseService<T> {
//   isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   error$ = new Subject<string>();
//   subject$ = new Subject<T>();
//   protected subs$: Subscription[] = [];

//   constructor() {}
//   protected handleError(err: any) {
//     this.error$.next(err.error.msg);
//     this.isLoading$.next(false);
//   }

//   protected emitValue(value: T) {
//     this.subject$.next(value);
//     this.isLoading$.next(false);
//   }
//   clearSub() {
//     this.subs$.forEach((f) => f.unsubscribe());
//   }
// }
