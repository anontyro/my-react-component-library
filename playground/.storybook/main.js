module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    'storybook-readme/register',
  ],
};
