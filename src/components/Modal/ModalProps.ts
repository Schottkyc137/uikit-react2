import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react';

export interface ModalOptions {
  /**
   * Close the modal when the Esc key is pressed.
   *
   * @default true
   */
  escClose?: boolean;

  /**
   * Close the modal when the background is clicked.
   *
   * @default true
   */
  bgClose?: boolean;

  /**
   * Stack modals, when more than one is open.
   * By default, the previous modal will be hidden.
   *
   * @default false
   */
  stack?: boolean;

  /**
   * Define a target container via a selector to specify where the modal
   * should be appended in the DOM.
   * Setting it to false will prevent this behavior.
   *
   * @default true
   */
  container?: boolean;

  /**
   * Class to add to <html> when modal is active
   *
   * @default 'uk-modal-page'
   */
  clsPage?: string;

  className?: string;
}

export interface Modal {
  show(): void;
  hide(): void;
}

export type ModalBodyProps = HTMLProps<HTMLDivElement>;

export type ModalTitleProps = HTMLProps<HTMLHeadingElement>;

export type ModalHeaderProps = HTMLProps<HTMLDivElement>;

export type ModalFooterProps = HTMLProps<HTMLDivElement>;

export interface ModalCloseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  mode?: 'default' | 'outside';
}
