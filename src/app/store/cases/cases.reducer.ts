import { createReducer, on } from '@ngrx/store';
import { retrievedCasesList } from '@app/store/cases/cases.actions';
import { CasesState, IRegionsCases } from '@app/store/cases/cases.state';
import { ICases, ICountryStateAll } from '@app/models/cases/country';

const initialCasesList = {} as CasesState;

export const casesReducer = createReducer(
  initialCasesList,
  on(retrievedCasesList, (state, {casesList}) => {
    const countriesCases = parseCases(casesList);
    return {...state, casesList, countriesCases};
  })
);

function parseCases(cases: ICases): IRegionsCases {
  const continents: IRegionsCases = new Map<string, ICountryStateAll[]>();

  Object.values(cases)
    .filter(item => item.All.country)
    .map(state => state.All)
    .forEach(country => {
      const continent = country.continent || 'other';
      if (continents.get(continent)) {
        continents.get(continent).push(country);
      } else {
        continents.set(continent, [country]);
      }
    });

  return continents;
}
