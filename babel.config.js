module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    ['module:react-native-dotenv'],
    ['react-native-paper/babel'],
    'react-native-reanimated/plugin',
  ],
};
