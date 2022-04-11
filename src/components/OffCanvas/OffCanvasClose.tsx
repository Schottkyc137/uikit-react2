import { OffCanvasCloseProps } from './OffCanvasProps';
import React from 'react';
import { extendClasses } from '../util/class-names';

export function OffCanvasClose({ className, ...rest }: OffCanvasCloseProps) {
  return (
    <button
      className={extendClasses(className, 'uk-offcanvas-close')}
      {...rest}
      data-uk-close
    />
  );
}
