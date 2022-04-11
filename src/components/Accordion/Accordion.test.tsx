import { render, screen } from '@testing-library/react';
import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import 'intersection-observer';

describe('Accordion', () => {
  it('renders without crashing', () => {
    expect(render(<Accordion />)).toBeTruthy();
  });

  it('renders a snapshot', () => {
    render(
      <Accordion>
        <AccordionItem open>Panel</AccordionItem>
      </Accordion>
    );
    expect(screen.getByTestId('accordion')).toMatchSnapshot();
  });
});
