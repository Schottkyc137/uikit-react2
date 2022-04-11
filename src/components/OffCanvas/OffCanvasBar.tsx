import { OffCanvasBarProps } from './OffCanvasProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function OffCanvasBar({ className, ...rest }: OffCanvasBarProps) {
  return (
    <div className={extendClasses(className, 'uk-offcanvas-bar')} {...rest} />
  );
}
