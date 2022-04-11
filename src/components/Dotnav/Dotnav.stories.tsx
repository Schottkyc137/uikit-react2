import React, { useState } from 'react';
import { Dotnav } from './Dotnav';
export default {
  title: 'Dotnav',
  component: Dotnav,
};

export const Basic = () => {
  const [item, setItem] = useState(0);
  return (
    <Dotnav count={5} active={item} activeChanges={(val) => setItem(val)} />
  );
};

export const Vertical = () => {
  const [item, setItem] = useState(0);
  return (
    <Dotnav
      vertical
      count={3}
      active={item}
      activeChanges={(val) => setItem(val)}
    />
  );
};
