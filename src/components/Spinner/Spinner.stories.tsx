import React from 'react';
import { Spinner } from './Spinner';
export default {
  title: 'Spinner',
  component: Spinner,
};

export const Basic = () => <Spinner />;

export const WithRatio = () => (
  <>
    <Spinner ratio={3} />
    <Spinner ratio={4.5} />
  </>
);
