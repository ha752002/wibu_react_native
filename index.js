import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {App} from './src/App';
import {STORYBOOK_ENABLED} from '@env';

AppRegistry.registerComponent(appName, () => {
  console.log(STORYBOOK_ENABLED);
  if (process.env.STORYBOOK_ENABLED === 'true') {
    return require('./storybook').default;
  } else {
    return App;
  }
});
