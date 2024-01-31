import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {App} from './src/App';

AppRegistry.registerComponent(appName, () => {
  console.log(process.env.STORYBOOK_ENABLED);
  if (process.env.STORYBOOK_ENABLED === 'true') {
    return require('./.ondevice').default;
  } else {
    return App;
  }
});
