import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chiste$;
  imagen$;
  data = 'https://api.chucknorris.io/jokes/random';
  returnURL() {
    // tslint:disable-next-line:quotemark
     return "https://media.giphy.com/media/jVJmFAV8xbIys/giphy.gif"
  }
  constructor(private http: HttpClient) {
    this.chiste$=http.get(this.data).pluck('value');
    this.imagen$=http.get(this.data).pluck('value');
  }
}
