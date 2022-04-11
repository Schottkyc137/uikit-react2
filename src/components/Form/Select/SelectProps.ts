import { HTMLProps } from 'react';
import { CommonFormProps } from '../FormProps';

export interface SelectProps
  extends CommonFormProps,
    HTMLProps<HTMLSelectElement> {}
