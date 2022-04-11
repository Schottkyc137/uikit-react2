import React from 'react';
import { addNotification, closeAllNotifications } from './notifcation';
import { Icon } from '../Icon';

export default {
  title: 'Notification',
  component: <></>,
};

export const Basic = () => (
  <button onClick={() => addNotification('Notification Message')}>
    Click me
  </button>
);

export const WithIcon = () => (
  <button
    onClick={() =>
      addNotification(
        <>
          <Icon icon="check" /> Message With Icon
        </>
      )
    }
  >
    Click me
  </button>
);

export const DifferentPositions = () => (
  <>
    <button onClick={() => addNotification('Top Left', { pos: 'top-left' })}>
      Top Left
    </button>
    <button
      onClick={() => addNotification('Bottom Left', { pos: 'bottom-left' })}
    >
      Bottom Left
    </button>
    <button
      onClick={() => addNotification('Top Center', { pos: 'top-center' })}
    >
      Top center
    </button>
  </>
);

export const DifferentStyles = () => (
  <>
    {['primary', 'success', 'warning', 'danger'].map((style) => (
      // @ts-ignore
      <button onClick={() => addNotification(style, { status: style })}>
        {style}
      </button>
    ))}
    <button onClick={() => closeAllNotifications()}>Close all</button>
  </>
);
