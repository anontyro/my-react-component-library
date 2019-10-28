import {configure, addDecorator} from '@storybook/react';
import {addReadme} from 'storybook-readme';

addDecorator (addReadme);

// automatically import all files ending in *.stories.js
configure (require.context ('../src/stories', true, /\.stories\.js$/), module);
