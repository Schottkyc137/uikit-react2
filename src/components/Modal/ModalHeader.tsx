import { ModalFooterProps } from './ModalProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function ModalHeader({ className, ...rest }: ModalFooterProps) {
  return (
    <p className={extendClasses(className, 'uk-modal-header')} {...rest} />
  );
}
