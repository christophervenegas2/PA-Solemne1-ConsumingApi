import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../classes/cat';
import {Observable, observable} from 'rxjs';


@Injectable()
export class CatsService {

  constructor(
    private http: HttpClient
  ) { }

  public getDogs(): Observable<Cat[]> {
    return new Observable<Cat[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const cats = data.map(value => new Cat(value));
        observe.next(cats);
        observe.complete();
      });
    });
  }
}
