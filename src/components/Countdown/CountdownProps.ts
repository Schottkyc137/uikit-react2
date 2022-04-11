import { HTMLProps } from 'react';

export interface CountdownProps extends HTMLProps<HTMLDivElement> {
  to: Date;
}

export interface TimeFieldProps {
  label?: string;
  separator?: string;
}
