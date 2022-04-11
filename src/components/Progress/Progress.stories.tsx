import React from 'react';
import { Progress } from './Progress';
export default {
  title: 'Progress',
  component: Progress,
};

export const Basic = () => <Progress value={10} max={100} />;
