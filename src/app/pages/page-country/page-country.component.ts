import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { ICountry } from '@app/models/cases/country';
import { ApiService } from '@app/services/api.service';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { Observable } from 'rxjs';
import { ICountryHistory } from '@app/models/history/country';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { actionProgress } from '@app/store/progress/progress.actions';

export type CaseType = 'confirmed' | 'recovered' | 'deaths';

@Component({
  selector: 'app-page-country',
  templateUrl: './page-country.component.html',
  styleUrls: ['./page-country.component.scss']
})
export class PageCountryComponent implements OnInit {

  public typeOfCase: CaseType = 'confirmed';
  public history: ICountryHistory;

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  public countryName: string;

  public countryCases$: Observable<ICountry> = this.route.queryParams.pipe(
    map(params => params.name),
    switchMap(country => {
      this.countryName = country;
      return this.cases$.pipe(
        map(cases => cases[country])
      );
    })
  );

  public history$: Observable<ICountryHistory> = this.countryCases$.pipe(
    switchMap(() => this.getHistory())
  );

  private getHistory() {
    this.store.dispatch(actionProgress({isLoading: true}));
    return this.api.getCountryHistory(this.countryName, this.typeOfCase).pipe(
      tap(history => {
        this.history = history;
        this.initChartData(history);
      }),
      finalize(() => this.store.dispatch(actionProgress({isLoading: false})))
    );
  }

  private cases$ = this.store.pipe(select(selectCases));

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.history$.subscribe();
  }

  public initChartData(history: ICountryHistory): void {
    const dates: [number, number][] = Object.entries(history.All.dates).map(([date, value]) => {
      return [+new Date(date), value];
    });

    this.series = [
      {
        name: 'c',
        data: dates
      }
    ];
    this.chart = {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };

    this.title = {
      text: this.typeOfCase.toUpperCase()
    };

    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      title: {
        text: 'Confirmed peoples'
      }
    };
    this.xaxis = {
      type: 'datetime'
    };
    this.tooltip = {
      shared: false
    };
  }

  public onSelected($event: CaseType) {
    this.typeOfCase = $event;
    this.getHistory().subscribe();
  }
}
