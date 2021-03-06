import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Hl} from '../component-lib';

const stories = storiesOf('Highlighter', module);

stories.addParameters({
  component: 'Hl',
});

stories.addDecorator(withKnobs);

stories.add('Hl', () => {
  return (
    <p>
      This is a <Hl>Highlighted</Hl> section of the text
    </p>
  );
});
