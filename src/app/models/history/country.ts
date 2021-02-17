export interface ICountryHistory {
  country: string;
  population: number;
  sq_km_area: number;
  life_expectancy: number;
  elevation_in_meters: number;
  continent: string;
  abbreviation: string;
  location: string;
  iso: number;
  capital_city: string;
  dates: { [key: string]: number }[];
}
