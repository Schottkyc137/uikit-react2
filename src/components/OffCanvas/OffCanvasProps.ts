import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react';

export interface OffCanvasProps {
  /**
   * Off-canvas animation mode
   *
   * @default 'slide'
   */
  mode?: 'slide' | 'reveal' | 'push' | 'none';

  /**
   * Flip off-canvas to the right side.
   *
   * @default false
   */
  flip?: boolean;

  /**
   * Display the off-canvas together with an overlay.
   *
   * @default false
   */
  overlay?: boolean;

  /**
   * Close the off-canvas when the Esc key is pressed.
   *
   * @default true
   */
  escClose?: boolean;

  /**
   * Close the off-canvas when the background is clicked.
   *
   * @default true
   */
  bgClose?: boolean;

  beforeShow?: (event: Event) => void;
}

export type OffCanvasBarProps = HTMLProps<HTMLDivElement>;

export type OffCanvasCloseProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
