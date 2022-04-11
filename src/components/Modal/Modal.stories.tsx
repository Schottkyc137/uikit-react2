import React from 'react';
import { prompt, showModal, confirm, alert, dialog } from './Modal';
import { Button } from '../Button';
import { ModalBody } from './ModalBody';
import { ModalTitle } from './ModalTitle';
import { ModalFooter } from './ModalFooter';
import { ModalClose } from './ModalClose';
import { ModalHeader } from './ModalHeader';

export default {
  title: 'Modal',
  component: <></>,
};

export const Basic = () => (
  <Button
    onClick={() =>
      showModal(
        <ModalBody>
          <ModalTitle>Headline</ModalTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="uk-text-right">
            <Button look="default" type="button">
              Cancel
            </Button>
            <Button look="primary" className="uk-modal-close" type="button">
              Close
            </Button>
          </p>
        </ModalBody>
      )
    }
  >
    Open
  </Button>
);

export const HeaderAndFooter = () => (
  <Button
    onClick={() =>
      showModal(
        <>
          <ModalClose />
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button look="default" type="button">
              Cancel
            </Button>
            <Button look="primary" className="uk-modal-close" type="button">
              Close
            </Button>
          </ModalFooter>
        </>
      )
    }
  >
    Open
  </Button>
);

export const Container = () => (
  <Button
    onClick={() =>
      showModal(
        <ModalBody>
          <ModalClose />
          <ModalTitle>Headline</ModalTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ModalBody>,
        {
          className: 'uk-modal-container',
        }
      )
    }
  >
    Open
  </Button>
);

export const SpecialModals = () => (
  <>
    <Button onClick={() => dialog(<ModalBody>UIKit Dialog!</ModalBody>)}>
      Dialog
    </Button>
    <Button onClick={() => alert('Alert')}>Alert</Button>
    <Button onClick={() => confirm('Confirmation')}>Confirm</Button>
    <Button onClick={() => prompt('Name', 'Your Name')}>Prompt</Button>
  </>
);
