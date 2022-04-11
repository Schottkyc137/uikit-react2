import React from 'react';
import { ImageIconProps } from './IconProps';

export function IconImage({ imageURL }: ImageIconProps) {
  return (
    <span
      className="uk-icon uk-icon-image"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
  );
}
