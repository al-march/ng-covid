import { ICases, ICountryStateAll } from '@app/models/cases/country';
export type IRegionsCases = Map<string, IRegionCase>;

export interface IRegionCase {
  confirmed: number;
  deaths: number;
  recovered: number;
  countries: ICountryStateAll[];
}

export interface CasesState {
  casesList: ICases;
  regionCases: IRegionsCases;
}
