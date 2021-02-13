import { createReducer, on } from '@ngrx/store';
import { actionDrawer } from '@app/store/drawer/drawer.actions';

const initialDrawer = {
  isActive: true
};

export const drawerReducer = createReducer(
  initialDrawer,
  on(actionDrawer, (state, {isActive}) => ({...state, isActive}))
);

