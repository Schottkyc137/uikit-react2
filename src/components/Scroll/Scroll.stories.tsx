import React, { useRef } from 'react';
import { scrollTo } from './Scroll';
import { Button } from '../Button';
import { alert } from '../Modal';
export default {
  title: 'Scroll',
};

export const Basic = () => {
  const upperButton = useRef<HTMLButtonElement | null>(null);
  const lowerButton = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button ref={upperButton} onClick={() => scrollTo(lowerButton)}>
        Scroll down
      </Button>
      <div style={{ height: 1000 }} />
      <Button ref={lowerButton} onClick={() => scrollTo(upperButton)}>
        Scroll up
      </Button>
    </>
  );
};

export const withCallback = () => {
  const upperButton = useRef<HTMLButtonElement | null>(null);
  const lowerButton = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        ref={upperButton}
        onClick={() =>
          scrollTo(lowerButton, {}, upperButton, () =>
            alert('You scrolled down!')
          )
        }
      >
        Scroll down
      </Button>
      <div style={{ height: 1000 }} />
      <Button ref={lowerButton} onClick={() => scrollTo(upperButton)}>
        Scroll up
      </Button>
    </>
  );
};
