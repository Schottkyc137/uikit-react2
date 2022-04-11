import { HTMLProps } from 'react';

export type BreadcrumbsProps = HTMLProps<HTMLUListElement>;

export interface CrumbProps extends HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
}

export type PlainCrumbProps = HTMLProps<HTMLSpanElement>;
