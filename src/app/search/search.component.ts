import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx'; // For methods for Observables
import { PersonService } from '../person.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  people = [];
  private currentSortColumn = '';
  private reverse = false;

  constructor(private personService: PersonService) { }

  checkSearch(term: string) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.personService.getPeople(term)
       .subscribe(people => this.people = people);
    }
  }

  toggleSortOrder(column) {
    if (column !== this.currentSortColumn) {
      this.currentSortColumn = column;
      this.people.sort((itemOne, itemTwo) =>
        (itemOne[column] < itemTwo[column]) ? -1 :
          (itemOne[column] > itemTwo[column]) ? 1 : 0
      );
    }
  }

  arrow(column: string) {
   if (this.currentSortColumn === column) {
     return this.reverse ? '▲' : '▼';
   }
  }

  ngOnInit() {
  }

}
