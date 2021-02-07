import { createReducer, on } from '@ngrx/store';
import { retrievedCasesByContinents, retrievedCasesList } from '@app/store/cases/cases.actions';
import { CasesState } from '@app/store/cases/cases.state';

const initialCasesList = {} as CasesState;

export const casesReducer = createReducer(
  initialCasesList,
  on(retrievedCasesList, (state, {casesList}) => ({...state, casesList})),
  on(retrievedCasesByContinents, (state, {countriesCases}) => ({...state, countriesCases}))
);
