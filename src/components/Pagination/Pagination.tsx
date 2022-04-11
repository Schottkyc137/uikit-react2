import React from 'react';
import { PaginationProps } from './PaginationProps';
import { extendClasses } from '../util/class-names';

export function Pagination({ className, ...rest }: PaginationProps) {
  return <ul className={extendClasses(className, 'uk-pagination')} {...rest} />;
}
