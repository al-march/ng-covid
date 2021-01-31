export interface CasesResponse {
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
  lat: string;
  life_expectancy: string;
  location: string;
  long: string;
  population: number;
  recovered: number;
  sq_km_area: number;
  updated: string;
}

export interface ICountryStateLocal {
  lat: string;
  long: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  updated: string;
}
