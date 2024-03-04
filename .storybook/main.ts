/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: ["../wibu-ui/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
