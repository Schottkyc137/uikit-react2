import { HTMLProps } from 'react';

export interface ListProps extends HTMLProps<HTMLUListElement> {
  /**
   * Sets a marker to the list. Omitting this renders no marker.
   */
  marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'hyphen';

  colorModifier?: 'muted' | 'emphasis' | 'primary' | 'secondary';

  divider?: boolean;

  striped?: boolean;

  sizeModifier?: 'large' | 'collapse';
}
