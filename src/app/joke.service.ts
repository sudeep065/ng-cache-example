import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map, tap } from 'rxjs/operators';

@Injectable()
export class JokeService {
  // global level decldeclaration 
  API_ENDPOINT = 'https://api.icndb.com/jokes/random/1?limitTo=[nerdy]';
  data$: Observable<any>;
  // end
  constructor(private http: HttpClient) {
    this.data$ = this.getData().pipe(tap(() => console.log(3)), shareReplay())
  }

  getData() {
    return this.http.get(this.API_ENDPOINT)
  }
}