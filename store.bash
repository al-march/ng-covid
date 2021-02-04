#!/bin/bash

stateName=$1

if [ -z "$stateName" ]; then
  echo "Please enter a name"
  exit
fi

folderName="$(pwd)/src/app/store/$stateName"

if [ ! -d "$folderName" ]; then
  mkdir -p "$folderName"
else
  echo "The folder already exists"
  exit
fi

actionPath="$folderName/$stateName.actions.ts"
reducerPath="$folderName/$stateName.reducer.ts"
selectorsPath="$folderName/$stateName.selectors.ts"
statePath="$folderName/$stateName.state.ts"

echo "$actionPath"

touch "$actionPath"
touch "$reducerPath"
touch "$selectorsPath"
touch "$statePath"

Capitalize() {
  word="$1"
  toUpper=$(tr '[:lower:]' '[:upper:]' <<< "${word:0:1}")
  last=${word:1}
  echo "$toUpper""$last"
}

actionCode="import { createAction, props } from '@ngrx/store';

export const action$(Capitalize "$stateName") = createAction(
  '[$(Capitalize "$stateName")] Action event',
  props<{ param: any }>()
);
"

reducerCode="import { createReducer, on } from '@ngrx/store';
import { action$(Capitalize "$stateName") } from '@app/store/$stateName/$stateName.actions';

const initial$(Capitalize "$stateName"): any = null

export const ${stateName}Reducer = createReducer(
  initial$(Capitalize "$stateName"),
  on(action$(Capitalize "$stateName"), (state, {param}) => param)
);
"

selectorsCode="import { createSelector } from '@ngrx/store';

export const select$(Capitalize "$stateName") = createSelector(
  (state: any) => state.param,
  (param: any) => param
);
"

echo "${actionCode}" >"$actionPath"
echo "${reducerCode}" >"$reducerPath"
echo "${selectorsCode}" >"$selectorsPath"
