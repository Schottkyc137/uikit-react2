import React from 'react';
import { SpinnerProps } from './SpinnerProps';
import { propsToUikitOptions } from '../util/uikit-props';

export function Spinner(props: SpinnerProps) {
  return <div data-uk-spinner={propsToUikitOptions(props)} />;
}
