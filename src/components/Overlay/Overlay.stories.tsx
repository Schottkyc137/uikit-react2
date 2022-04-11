import React from 'react';
import { Overlay } from './Overlay';

import photo from '../../../storybook-assets/photo.jpg';
import { OverlayCover } from './OverlayCover';
import { OverlayIcon } from './OverlayIcon';

export default {
  title: 'Overlay',
  component: Overlay,
};

export const Basic = () => (
  <div className="uk-inline">
    <img src={photo} width="1800" height="1200" alt="" />
    <Overlay position="bottom" className="uk-light">
      <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Overlay>
  </div>
);

export const DefaultBackground = () => (
  <div className="uk-child-width-1-2@m" data-uk-grid>
    <div>
      <div className="uk-inline">
        <img src={photo} width="1800" height="1200" alt="" />
        <Overlay position="bottom" background="default" className="uk-dark">
          <p>
            Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Overlay>
      </div>
    </div>
    <div>
      <div className="uk-inline">
        <img src={photo} width="1800" height="1200" alt="" />
        <OverlayCover background="default" />
        <Overlay position="bottom" background="default" className="uk-dark">
          <p>
            Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Overlay>
      </div>
    </div>
  </div>
);

export const PrimaryBackground = () => (
  <div className="uk-child-width-1-2@m" data-uk-grid>
    <div>
      <div className="uk-inline">
        <img src={photo} width="1800" height="1200" alt="" />
        <Overlay position="bottom" background="primary" className="uk-dark">
          <p>
            Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Overlay>
      </div>
    </div>
    <div>
      <div className="uk-inline">
        <img src={photo} width="1800" height="1200" alt="" />
        <OverlayCover background="primary" />
        <Overlay position="bottom" background="primary" className="uk-dark">
          <p>
            Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Overlay>
      </div>
    </div>
  </div>
);

export const Icon = () => (
  <div className="uk-child-width-1-2@m" data-uk-grid>
    <div>
      <div className="uk-inline uk-light">
        <img src={photo} width="1800" height="1200" alt="" />
        <div className="uk-position-center">
          <OverlayIcon />
        </div>
      </div>
    </div>
    <div>
      <div className="uk-inline uk-dark">
        <img src={photo} width="1800" height="1200" alt="" />
        <Overlay position="cover" background="default">
          <div className="uk-position-center">
            <OverlayIcon />
          </div>
        </Overlay>
      </div>
    </div>
  </div>
);
