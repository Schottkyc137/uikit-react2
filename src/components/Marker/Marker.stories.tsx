import React from 'react';
import { Marker } from './Marker';

import light from '../../../storybook-assets/light.jpg';
import dark from '../../../storybook-assets/dark.jpg';

export default {
  title: 'Marker',
  component: Marker,
};

export const Basic = () => (
  <div className="uk-child-width-1-2" uk-grid>
    <div>
      <div className="uk-inline uk-dark">
        <img src={light} width="1800" height="1200" alt="" />
        <Marker x={20} y={30} />
        <Marker x={60} y={40} />
        <Marker x={80} y={70} />
      </div>
    </div>
    <div>
      <div className="uk-inline uk-light">
        <img src={dark} width="1800" height="1200" alt="" />
        <Marker x={20} y={30} />
        <Marker x={60} y={40} />
        <Marker x={80} y={70} />
      </div>
    </div>
  </div>
);
