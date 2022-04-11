import React, { useRef } from 'react';
import { OffCanvas } from './OffCanvas';
import { Button } from '../Button';
import { OffCanvasBar } from './OffCanvasBar';
import { OffCanvasClose } from './OffCanvasClose';

export default {
  title: 'OffCanvas',
  component: <></>,
};

export const Basic = () => {
  const offCanvas = useRef<OffCanvas | null>(null);

  return (
    <>
      <Button onClick={() => offCanvas.current?.show()}>Open</Button>
      <OffCanvas ref={offCanvas}>
        <OffCanvasBar>
          <OffCanvasClose />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </OffCanvasBar>
      </OffCanvas>
    </>
  );
};

export const Overlay = () => {
  const offCanvas = useRef<OffCanvas | null>(null);

  return (
    <>
      <Button onClick={() => offCanvas.current?.show()}>Open</Button>
      <OffCanvas ref={offCanvas} overlay>
        <OffCanvasBar>
          <OffCanvasClose />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </OffCanvasBar>
      </OffCanvas>
    </>
  );
};

export const FlipAndClose = () => {
  const ref = useRef<OffCanvas | null>(null);
  return (
    <>
      <Button onClick={() => ref.current?.show()}>Open</Button>
      <Button onClick={() => ref.current?.hide()}>Close</Button>
      <OffCanvas ref={ref} flip>
        <OffCanvasBar>
          <OffCanvasClose />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </OffCanvasBar>
      </OffCanvas>
    </>
  );
};
