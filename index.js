/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import {STORYBOOK_ENABLED} from '@env';

AppRegistry.registerComponent(appName, () => {
  console.log(STORYBOOK_ENABLED);
  if (STORYBOOK_ENABLED === 'true') {
    return require('./.ondevice').default;
  }
  return App;
});
