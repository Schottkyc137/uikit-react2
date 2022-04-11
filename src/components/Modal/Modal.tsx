import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import { Modal, ModalOptions } from './ModalProps';
import { renderToStaticMarkup } from 'react-dom/server';
import { toKebapCase } from '../util/uikit-props';

export function modal(element: ReactElement, options?: ModalOptions): Modal {
  const divElement = document.createElement('div');
  divElement.setAttribute('uk-modal', '');
  if (options?.className) {
    divElement.setAttribute('class', options.className);
  }
  ReactDOM.render(
    <div className={'uk-modal-dialog'}>{element}</div>,
    divElement
  );
  return UIkit.modal(divElement, toKebapCase(options));
}

export function showModal(element: ReactElement, options?: ModalOptions): void {
  modal(element, options).show();
}

/**
 * Show an alert box with one button.
 */
export function alert(message: string, options?: ModalOptions): Promise<void> {
  return UIkit.modal.alert(message, toKebapCase(options));
}

/**
 * Show a confirm dialog with your message and two buttons.
 */
export function confirm(
  message: string,
  options?: ModalOptions
): Promise<void> {
  return UIkit.modal.confirm(message, options);
}

/**
 * Show a dialog asking for a text input.
 */
export function prompt(
  message: string,
  placeholder: string,
  options?: ModalOptions
): Promise<string | null> {
  return UIkit.modal.prompt(message, placeholder, options);
}

export function dialog(
  message: ReactElement,
  options?: ModalOptions
): Promise<void> {
  return UIkit.modal.dialog(renderToStaticMarkup(message), options);
}
