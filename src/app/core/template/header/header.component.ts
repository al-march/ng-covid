import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { ICases } from '@app/models/cases/country';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSidebar = new EventEmitter();

  control = new FormControl();
  options: ICases;
  filteredOptions: Observable<string[]>;

  cases$ = this.store.pipe(select(selectCases));

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    const filterCases = (cases: ICases, searchValue: string) => (
      Object.keys(cases).filter(item => item.toLowerCase().includes(searchValue.toLowerCase()))
    );

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      switchMap((value) => (
          this.cases$.pipe(map(cases => filterCases(cases, value)))
        )
      )
    );
  }
}
