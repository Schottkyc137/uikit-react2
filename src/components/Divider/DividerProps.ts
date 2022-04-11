import { HTMLProps } from 'react';

export interface DividerProps extends HTMLProps<HTMLHRElement> {
  icon?: boolean;
  small?: boolean;
  vertical?: boolean;
}
