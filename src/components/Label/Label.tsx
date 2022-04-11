import React from 'react';
import { LabelProps } from './LabelProps';

export function Label({ look, children }: LabelProps) {
  const className = look ? `uk-label uk-label-${look}` : 'uk-label';

  return <span className={className}>{children}</span>;
}
