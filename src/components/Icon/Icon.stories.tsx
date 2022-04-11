import React from 'react';
import { Icon } from './Icon';
import { IconLink } from './IconLink';
import { IconButton } from './IconButton';

export default {
  title: 'Icon',
  component: Icon,
};

export const Basic = () => (
  <>
    <Icon icon="check" />
    <Icon icon="heart" />
  </>
);

export const DifferentRatio = () => (
  <>
    <Icon icon="check" ratio={2} />
    <Icon icon="check" ratio={0.5} />
    <Icon icon="check" ratio={3.5} />
  </>
);

export const Link = () => (
  <>
    <IconLink icon="copy" className="uk-margin-small-right" />
    <IconLink icon="file-edit" className="uk-margin-small-right" />
    <IconLink icon="trash" />
  </>
);

export const Button = () => (
  <>
    <IconButton icon="twitter" className="uk-margin-small-right" />
    <IconButton icon="facebook" className="uk-margin-small-right" />
    <IconButton icon="youtube" />
  </>
);
