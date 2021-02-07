import { ICases, ICountryStateAll } from '@app/models/cases/country';
export type IRegionsCases = Map<string, ICountryStateAll[]>;


export interface CasesState {
  casesList: ICases;
  countriesCases: IRegionsCases;
}
