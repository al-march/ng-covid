import { createSelector } from '@ngrx/store';
import { CasesState } from '@app/store/cases/cases.state';
import { ICases } from '@app/models/cases/country';

export const selectCases = createSelector(
  (state: CasesState) => state.casesList,
  (casesList: ICases) => casesList
);
