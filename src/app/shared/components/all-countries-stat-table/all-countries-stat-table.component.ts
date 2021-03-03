import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ICountryStateAll } from '@app/models/cases/country';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-countries-stat-table',
  templateUrl: './all-countries-stat-table.component.html',
  styleUrls: ['./all-countries-stat-table.component.scss']
})
export class AllCountriesStatTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() pagination: number[] = [15, 20, 25, 50];
  @Input() countries: ICountryStateAll[] = [];

  public displayedColumns: string[] = ['country', 'population', 'confirmed', 'deaths', 'actions'];
  public dataSource: MatTableDataSource<ICountryStateAll>;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ICountryStateAll>(this.countries);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    const {paginator} = this.dataSource;
    paginator && paginator.firstPage();
  }
}
