import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private previousUrl$ = new BehaviorSubject<string[]>([]);
  currentUrsl$ = this.previousUrl$.asObservable();
  constructor() {}

  pushUrl(url: string) {
    console.log(url);
    this.previousUrl$.next([...this.previousUrl$.value, url]);
  }
}
