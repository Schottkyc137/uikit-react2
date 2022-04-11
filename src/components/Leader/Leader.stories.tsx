import React from 'react';
import { Leader } from './Leader';

export default {
  title: 'Leader',
  component: Leader,
};

export const Basic = () => (
  <div className="uk-grid-small" uk-grid>
    <Leader className="uk-width-expand">Lorem ipsum dolor sit amet</Leader>
    <div>$20.90</div>
  </div>
);

export const Filled = () => (
  <div className="uk-grid-small" data-uk-grid>
    <Leader className="uk-width-expand" fill="-">
      Lorem ipsum dolor sit amet
    </Leader>
    <div>$20.90</div>
  </div>
);
