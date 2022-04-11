import React from 'react';
import { ModalBodyProps } from './ModalProps';
import { extendClasses } from '../util/class-names';

export function ModalBody({ className, ...rest }: ModalBodyProps) {
  return (
    <div className={extendClasses(className, 'uk-modal-body')} {...rest} />
  );
}
