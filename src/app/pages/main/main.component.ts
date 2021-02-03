import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { map } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICountryStateAll } from '@app/models/cases/country';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['country', 'population', 'confirmed', 'deaths'];
  public dataSource: MatTableDataSource<ICountryStateAll>;
  public countries: ICountryStateAll[]

  public cases$ = this.store.pipe(select(selectCases)).pipe(
    map(list => Object.values(list)
      .filter(item => item.All.country)
      .map(state => state.All))
  )

  constructor(
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.cases$.subscribe(countries => {
      console.log(countries);
      this.dataSource = new MatTableDataSource<ICountryStateAll>(countries);
    })
  }

  ngAfterViewInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
  }

  parseCases() {
  }
}
