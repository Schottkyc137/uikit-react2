import { ModalFooterProps } from './ModalProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function ModalFooter({ className, ...rest }: ModalFooterProps) {
  return (
    <p
      className={extendClasses(className, 'uk-text-right uk-modal-footer')}
      {...rest}
    />
  );
}
