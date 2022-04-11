import { ModalCloseButtonProps } from './ModalProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function ModalClose({
  mode,
  className,
  ...rest
}: ModalCloseButtonProps) {
  return (
    <button
      className={extendClasses(
        className,
        `uk-modal-close-${mode ?? 'default'}`
      )}
      {...rest}
      data-uk-close
    />
  );
}
