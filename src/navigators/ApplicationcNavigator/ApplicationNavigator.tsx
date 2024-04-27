import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '~/themes/Variable.ts';

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
