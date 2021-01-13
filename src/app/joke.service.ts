import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map, tap } from 'rxjs/operators';


const API_ENDPOINT = 'https://api.icndb.com/jokes/random/1?limitTo=[nerdy]';


@Injectable()
export class JokeService {

  data$: Observable<any>;
  constructor(private http: HttpClient) {

    this.data$ = this.aaa().pipe(tap(() => console.log(3)), shareReplay(1))

  }


  public aaa() {

    return this.http.get(API_ENDPOINT)
  }
}