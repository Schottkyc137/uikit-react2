import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const Basic = () => (
  <Alert>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Alert>
);

export const CloseButton = () => (
  <Alert close>
    <h3>Notice</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const DifferentStyles = () => (
  <>
    <Alert look="primary" close>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </Alert>
    <Alert look="danger" close>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </Alert>
    <Alert look="warning" close>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </Alert>
    <Alert look="success" close>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </Alert>
  </>
);
