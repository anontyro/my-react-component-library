import {BaseCard} from '../component-lib';

export default {
  title: 'BaseCard',
};

export const card = () => (
  <BaseCard>
    {{
      header: <h1>Test header</h1>,
      content: <p>Value here</p>,
    }}
  </BaseCard>
);
