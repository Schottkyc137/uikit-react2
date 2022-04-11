import React from 'react';
import { Lightbox } from './Lightbox';

export default {
  title: 'Lightbox',
  component: Lightbox,
};

export const Basic = () => (
  <Lightbox>
    <a className="uk-button uk-button-default" href="images/photo.jpg">
      Open Lightbox
    </a>
  </Lightbox>
);
