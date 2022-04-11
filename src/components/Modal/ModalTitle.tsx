import { ModalBodyProps } from './ModalProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function ModalTitle({ className, ...rest }: ModalBodyProps) {
  return (
    <h2 className={extendClasses(className, 'uk-modal-title')} {...rest} />
  );
}
