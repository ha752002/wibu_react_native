import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { Colors } from '~/themes/Variable.ts';
import { StatusBar } from 'react-native';

const navigationRef = createNavigationContainerRef();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        animated
      />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
