#!/bin/bash

if [ -z "$1" ]
then
  echo "Please enter a name"
  exit
fi

folderName="$(pwd)/src/app/store/$1"

if [ ! -d "$folderName" ]
then
    mkdir -p "$folderName"
else
  echo "The folder already exists"
fi

touch "$folderName/$1.actions.ts"
touch "$folderName/$1.reducer.ts"
touch "$folderName/$1.selectors.ts"
touch "$folderName/$1.state.ts"
