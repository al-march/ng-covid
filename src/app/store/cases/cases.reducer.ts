import { createReducer, on } from '@ngrx/store';
import { retrievedCasesList } from '@app/store/cases/cases.actions';
import { CasesState, IRegionCase, IRegionsCases } from '@app/store/cases/cases.state';
import { ICases } from '@app/models/cases/country';

const initialCasesList = {} as CasesState;

export const casesReducer = createReducer(
  initialCasesList,
  on(retrievedCasesList, (state, {casesList}) => {
    const sortedCases = sortCases(casesList);
    const parsedCases = parseCases(sortedCases);
    return {
      ...state,
      casesList: sortedCases,
      regionCases: parsedCases
    };
  })
);

function sortCases(cases: ICases): ICases {
  const compare = (a: string, b: string) => {
    if (cases[a].All.confirmed < cases[b].All.confirmed) {
      return 1;
    }
    if (cases[a].All.confirmed > cases[b].All.confirmed) {
      return -1;
    }

    return 0;
  };

  const output: ICases = {};

  Object.keys(cases)
    .sort(compare)
    .forEach(item => {
      console.log(cases[item]);
      output[item] = cases[item];
    });

  return output;
}

function parseCases(cases: ICases): IRegionsCases {
  const regions: IRegionsCases = new Map<string, IRegionCase>();

  Object.values(cases)
    .filter(item => item.All.country)
    .forEach(state => {
      const country = state.All;
      const regionName = country.continent || 'other';
      const region = regions.get(regionName);

      if (region) {
        region.confirmed += country.confirmed;
        region.deaths += country.deaths;
        region.recovered += country.recovered;
        region.countries.push(country);
        return;
      }

      const defaultValue: IRegionCase = {
        confirmed: country.confirmed,
        deaths: country.deaths,
        recovered: country.recovered,
        countries: [country]
      };
      regions.set(regionName, defaultValue);
    });

  return regions;
}
