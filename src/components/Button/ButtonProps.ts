import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  look?: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link';

  size?: 'small' | 'large';
}

export type ButtonGroupProps = HTMLProps<HTMLDivElement>;
