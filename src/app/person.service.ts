import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class PersonService {

  private server = 'http://localhost:8081';

  constructor(private http: Http) { }

  getPeople(term: string): Observable<Person[]> {
   return this.http.get(this.server + '/people/' + term)
     .map((res) => res.json())
     .map((response)=> response.people);
  }

}
