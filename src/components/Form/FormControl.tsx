import React, { cloneElement, ReactElement } from 'react';
import { CommonFormProps, FormControlProps } from './FormProps';
import { randomId } from '../util/random-id';

export function FormControl(props: FormControlProps) {
  let element: ReactElement<CommonFormProps>;
  let id: string;
  if (props.control.props.id === undefined) {
    id = randomId();
    element = cloneElement(props.control, {
      ...props.control.props,
      id: id,
    });
  } else {
    element = props.control;
    id = props.control.props.id;
  }
  return (
    <div>
      <label className="uk-form-label" htmlFor={id}>
        {props.label}
      </label>
      <div className="uk-form-controls">{element}</div>
    </div>
  );
}
