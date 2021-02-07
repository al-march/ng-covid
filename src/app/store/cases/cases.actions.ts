import { createAction, props } from '@ngrx/store';
import { ICases } from '@app/models/cases/country';
import { IRegionsCases } from '@app/store/cases/cases.state';

export const retrievedCasesList = createAction(
  '[Cases List] Retrieve Cases Success',
  props<{ casesList: ICases }>()
);

export const retrievedCasesByContinents = createAction(
  '[Countries Map] Retrieve Cases of countries Success',
  props<{ countriesCases: IRegionsCases }>()
);
