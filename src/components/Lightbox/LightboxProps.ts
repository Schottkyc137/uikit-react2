import { ReactNode } from 'react';

export interface LightboxProps {
  /**
   * Lightbox animation mode
   *
   * @default 'slide'
   */
  animation?: 'slide' | 'fade' | 'scale';

  /**
   * Lightbox autoplays
   *
   * @default false
   */
  autoplay?: boolean;

  /**
   * The delay between switching slides in autoplay mode
   *
   * @default 7000
   */
  autoplayInterval?: number;

  /**
   * Pause autoplay mode on hover
   *
   * @default false
   */
  pauseOnHover?: boolean;

  /**
   * Lightbox videos autoplay
   *
   * @default false
   */
  videoAutoplay?: boolean;

  /**
   * The initial item to show. (zero based)
   *
   * @default 0
   */
  index?: number;

  /**
   * The animation velocity (pixel/ms).
   *
   * @default 2
   */
  velocity?: number;

  /**
   * The number of items to preload.
   * (left and right of the currently active item)
   *
   * @default 1
   */
  preload?: number;

  /**
   * An array of items to display, e.g.
   * [{source: 'images/size1.jpg', caption: '900x600'}]
   */
  items?: object[];

  /**
   * The template string.
   */
  template?: string;

  /**
   * Delay time before controls fade out in ms.
   *
   * @default 3000
   */
  delayControls?: number;

  /**
   * Define a target container via a selector to specify
   * where the Lightbox should be appended in the DOM.
   *
   * @default 'body'
   */
  container?: string;

  children?: ReactNode;
}
