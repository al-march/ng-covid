import { createAction, props } from '@ngrx/store';

export const actionProgress = createAction(
  '[Progress] Action event',
  props<{ isLoading: boolean }>()
);

