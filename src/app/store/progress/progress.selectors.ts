import { createSelector } from '@ngrx/store';
import { ProgressState } from '@app/store/progress/progress.state';

export const selectProgress = createSelector(
  (state: ProgressState) => state.isLoading,
  (isLoading) => isLoading
);

