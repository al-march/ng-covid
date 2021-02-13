import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DrawerState } from '@app/store/drawer/drawer.state';

export const getDrawerState = createFeatureSelector<DrawerState>('drawer');

export const selectDrawer = createSelector(
  getDrawerState,
  (state: DrawerState) => state
);

