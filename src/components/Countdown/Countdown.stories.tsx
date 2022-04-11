import React from 'react';
import { Countdown } from './Countdown';
import { Days, Hours, Minutes, Seconds } from './TimeFields';
export default {
  title: 'Countdown',
  component: Countdown,
};

export const Basic = () => (
  <Countdown
    to={new Date('2022-04-13')}
    className="uk-grid-small uk-child-width-auto uk-margin"
    data-uk-grid
  >
    <Days />
    <Hours />
    <Minutes />
    <Seconds />
  </Countdown>
);

export const Separator = () => (
  <Countdown
    to={new Date('2022-04-13')}
    className="uk-grid-small uk-child-width-auto uk-margin"
    data-uk-grid
  >
    <Days separator=":" />
    <Hours separator=":" />
    <Minutes separator=":" />
    <Seconds />
  </Countdown>
);

export const Label = () => (
  <Countdown
    to={new Date('2022-04-13')}
    className="uk-grid-small uk-child-width-auto uk-margin"
    data-uk-grid
  >
    <Days label="Days" />
    <Hours label="Hours" />
    <Minutes label="Minutes" />
    <Seconds label="Seconds" />
  </Countdown>
);

export const LabelAndSeparator = () => (
  <Countdown
    to={new Date('2022-04-13')}
    className="uk-grid-small uk-child-width-auto uk-margin"
    data-uk-grid
  >
    <Days label="Days" separator=":" />
    <Hours label="Hours" separator=":" />
    <Minutes label="Minutes" separator=":" />
    <Seconds label="Seconds" />
  </Countdown>
);
