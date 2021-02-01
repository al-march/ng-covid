export interface ICases {
  [key: string]: ICountry;
}

export interface ICountry {
  All: ICountryStateAll;
  [key: string]: ICountryStateLocal;
}

export interface ICountryStateAll {
  abbreviation: string;
  capital_city: string;
  confirmed: number;
  continent: string;
  country: string;
  deaths: number;
  elevation_in_meters: number | null;
  iso: number;
  life_expectancy: string;
  location: string;
  population: number;
  recovered: number;
  sq_km_area: number;

  updated?: string;
  long?: string;
  lat?: string;
}

export interface ICountryStateLocal {
  confirmed: number;
  recovered: number;
  deaths: number;
  updated?: string;
  lat?: string;
  long?: string;
}
