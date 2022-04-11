import { HTMLProps } from 'react';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  styleModifier?: 'default' | 'primary' | 'secondary';

  /**
   * set this to automatically make a card have a body
   * without extra `<CardBody>` Tag
   */
  body?: boolean;

  hover?: boolean;

  sizeModifier?: 'small' | 'large';
}

export interface CardTitleProps extends HTMLProps<HTMLHeadingElement> {}

export interface CardBodyProps extends HTMLProps<HTMLDivElement> {}

export interface CardHeaderProps extends HTMLProps<HTMLDivElement> {}

export interface CardFooterProps extends HTMLProps<HTMLDivElement> {}

export interface CardMediaProps extends HTMLProps<HTMLDivElement> {
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface CardBadgeProps extends HTMLProps<HTMLDivElement> {}
