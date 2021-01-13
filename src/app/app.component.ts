import { Component } from '@angular/core';
import { JokeService } from './joke.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

constructor(public _jokeService:JokeService){
}

public getData() {
    this._jokeService.data$.subscribe((e) => {
     console.log(e)
    });
  }
}
