import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CommonFormProps } from '../FormProps';

export interface InputProps
  extends CommonFormProps,
    DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {}
