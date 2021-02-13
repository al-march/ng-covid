import { createAction, props } from '@ngrx/store';

export const actionDrawer = createAction(
  '[Drawer] Change active state',
  props<{ isActive: boolean }>()
);

