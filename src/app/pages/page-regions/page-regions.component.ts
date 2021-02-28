import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectRegionsCases } from '@app/store/cases/cases.selectors';
import { ChartComponent } from 'ng-apexcharts';
import { IRegionsCases } from '@app/store/cases/cases.state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface GraphData {
  data: number[];
  categories: string[];
}

@Component({
  selector: 'app-page-regions',
  templateUrl: './page-regions.component.html',
  styleUrls: ['./page-regions.component.scss']
})
export class PageRegionsComponent implements OnInit, OnDestroy {

  public regions$ = this.store.pipe(select(selectRegionsCases));

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartComponent>;

  private destroy$ = new Subject();

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.regions$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cases => this.initGraph(cases));
  }

  private initGraph(cases: IRegionsCases): void {
    const {data, categories} = this.parseData(cases);
    this.createGraph(data, categories);
  }


  private parseData(cases: IRegionsCases): GraphData {
    const data: number[] = [];
    const categories: string[] = [];

    cases.forEach((region, name) => {
      data.push(region.recovered);
      categories.push(name);
    });

    return {data, categories};
  }

  private createGraph(data: number[], categories: string[]): void {
    this.chartOptions = {
      series: [{
        name: 'Recovered',
        data
      }],
      chart: {
        height: 350,
        type: 'bar'
      },
      xaxis: {
        categories
      }
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
