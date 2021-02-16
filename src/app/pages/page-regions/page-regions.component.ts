import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectRegionsCases } from '@app/store/cases/cases.selectors';
import { ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-page-regions',
  templateUrl: './page-regions.component.html',
  styleUrls: ['./page-regions.component.scss']
})
export class PageRegionsComponent implements OnInit {

  public regions$ = this.store.pipe(select(selectRegionsCases));

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartComponent>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.regions$.subscribe(cases => {
      const data: number[] = [];
      const categories: string[] = [];

      cases.forEach((region, name) => {
        data.push(region.recovered);
        categories.push(name);
      });

      this.createGraph(data, categories);
    });
  }

  createGraph(data: number[] = [], categories: string[] = []) {
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

}
