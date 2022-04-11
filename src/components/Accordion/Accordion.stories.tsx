import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Basic = () => (
  <Accordion>
    <AccordionItem title="Item 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 2">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 3">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </AccordionItem>
  </Accordion>
);

export const NoCollapsing = () => (
  <Accordion collapsible={false}>
    <AccordionItem title="Item 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 2">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 3">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </AccordionItem>
  </Accordion>
);

export const Multiple = () => (
  <Accordion multiple={true}>
    <AccordionItem title="Item 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 2">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </AccordionItem>
    <AccordionItem title="Item 3">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </AccordionItem>
  </Accordion>
);
