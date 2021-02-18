import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { CaseType } from '@app/pages/page-country/page-country.component';

@Component({
  selector: 'app-page-country-list',
  templateUrl: './page-country-list.component.html',
  styleUrls: ['./page-country-list.component.scss']
})
export class PageCountryListComponent implements OnInit {

  @Output() onSelectionChange = new EventEmitter<CaseType>();
  @Input() typeOfCase: CaseType;
  @Input() confirmed: number;
  @Input() recovered: number;
  @Input() deaths: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelected($event: MatSelectionListChange) {
    const caseType = <CaseType>$event.options[0].value;
    this.onSelectionChange.emit(caseType);
  }
}
