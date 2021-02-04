import { createReducer, on } from '@ngrx/store';
import { actionProgress } from '@app/store/progress/progress.actions';

const initialProgress: boolean = false

export const progressReducer = createReducer(
  initialProgress,
  on(actionProgress, (state, {isLoading}) => isLoading)
);

