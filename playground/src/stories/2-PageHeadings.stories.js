import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {PageHeadings} from '../component-lib';

const stories = storiesOf ('Page Heading', module);

stories.addParameters ({
  component: 'PageHeadings',
});

stories.addDecorator (withKnobs);

stories.add ('PageHeadings', () => {
  const label = text ('Text', 'This is a H1 Header');
  const outline = boolean ('Has Border', false);
  const type = text ('Heading Type', 'h1');
  return <PageHeadings type={type} outline={outline} text={label} />;
});
