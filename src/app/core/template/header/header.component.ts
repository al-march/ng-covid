import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { getStoreValue } from '@app/store/store.helpers';
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
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this.cases$.pipe(
        map(cases => Object.keys(cases).filter(item => item.includes(value))))
      )
    );
  }
}
