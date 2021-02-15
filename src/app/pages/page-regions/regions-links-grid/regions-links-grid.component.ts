import { Component, Input, OnInit } from '@angular/core';
import { IRegionsCases } from '@app/store/cases/cases.state';

@Component({
  selector: 'app-regions-links-grid',
  templateUrl: './regions-links-grid.component.html',
  styleUrls: ['./regions-links-grid.component.scss']
})
export class RegionsLinksGridComponent implements OnInit {

  @Input() regions: IRegionsCases;

  constructor() {
  }

  ngOnInit(): void {
  }

}
