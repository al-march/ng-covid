import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent implements OnInit {

  @Input() iso: string = '';
  @Input() width = '20px';

  public url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.url = this.createURL();
  }

  createURL() {
    return `http://purecatamphetamine.github.io/country-flag-icons/3x2/${this.iso?.toUpperCase()}.svg`;
  }

}
