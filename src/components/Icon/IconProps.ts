import { HTMLProps } from 'react';

export interface IconProps extends HTMLProps<HTMLSpanElement> {
  /**
   * One of the available icons
   */
  icon: string;

  ratio?: number;
}

export interface ImageIconProps {
  imageURL?: string;
}

export type IconButtonProps = IconProps & HTMLProps<HTMLAnchorElement>;
