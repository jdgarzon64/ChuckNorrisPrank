import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
@Injectable()
export class MemeService {
data = 'https://api.chucknorris.io/jokes/random';
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<{}> {
    return this.httpClient.get(this.data).pluck('value');
  }
}
