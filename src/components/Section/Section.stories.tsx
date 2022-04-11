import React from 'react';
import { Section } from './Section';
import { Container } from '../Container';

export default {
  title: 'Section',
  component: Section,
};

export const Basic = () => (
  <Section styleModifier="muted">
    <Container>
      <h3>Section</h3>

      <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
