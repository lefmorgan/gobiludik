import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  time$: Observable<number> = interval(1000);
  constructor() {}
}
