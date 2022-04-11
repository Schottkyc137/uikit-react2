import { CommonFormProps } from '../FormProps';
import { HTMLProps } from 'react';

export interface TextAreaProps
  extends CommonFormProps,
    HTMLProps<HTMLTextAreaElement> {}
