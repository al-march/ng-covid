import { createAction, props } from '@ngrx/store';
import { ICases } from '@app/models/cases/country';

export const retrievedCasesList = createAction(
  '[Cases List] Retrieve Cases Success',
  props<{ casesList: ICases }>()
);
