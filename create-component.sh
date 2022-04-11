#!/bin/zsh

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 COMPONENT" >&2
  exit 1
fi

COMPONENT="$1"
FOLDER="src/components/$COMPONENT"
PROP="$COMPONENT"Props

mkdir "$FOLDER"

printf "export * from './%s' \nexport * from './%s';\n" "$COMPONENT" "$PROP" >> "$FOLDER"/index.ts
printf "import React from 'react';
import { %s } from './%s'
export function %s(props:%s) {
    return();
}" "$PROP" "$PROP" "$COMPONENT" "$PROP" >> "$FOLDER"/"$COMPONENT".tsx
printf "export interface %s {}\n" "$PROP" >> "$FOLDER"/"$PROP".ts
printf "import React from 'react';
import { %s } from './%s';
export default {
  title: '%s',
  component: %s,
};

export const Basic = () => ();
" "$COMPONENT" "$COMPONENT" "$COMPONENT" "$COMPONENT" >> "$FOLDER"/"$COMPONENT".stories.tsx
