import { createReducer, on } from '@ngrx/store';
import { retrievedCasesList } from '@app/store/cases/cases.actions';
import { ICases } from '@app/models/cases/country';

const initialCasesList: ICases = {} as ICases

export const casesReducer = createReducer(
  initialCasesList,
  on(retrievedCasesList, (state, {casesList}) => casesList)
);

