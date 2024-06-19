import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ColorValue, StatusBar } from 'react-native';
import {
  ApplicationStackParams,
  BottomTabParams,
  ListBottomTab,
} from './ApplicationNavigator.types.ts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '~/enums/screenNames.enum.ts';
import Manga from '~/screens/Manga/Manga.tsx';
import Chapter from '~/screens/Chapter/Chapter.tsx';
import Login from '~/screens/Login/Login.tsx';
import Register from '~/screens/Register/Register.tsx';
import Genre from '~/screens/Genre/Genre.tsx';
import { createStackNavigator } from '@react-navigation/stack';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { useTheme } from '~/hooks/useTheme.ts';

const navigationRef = createNavigationContainerRef<ApplicationStackParams>();
const BottomTab = createBottomTabNavigator<BottomTabParams>();
const Stack = createStackNavigator<ApplicationStackParams>();

const BottomTabNavigator = () => {
  const { Colors } = useTheme();

  const CreateBottomTabIcon = useCallback(
    (name: EIconName, focused: boolean, color: ColorValue) => (
      <WibuIcon name={name} size={focused ? ESize.M : ESize.S} color={color} />
    ),
    [],
  );

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.bgPrimary,
        tabBarActiveTintColor: Colors.bgWhite,
        headerShown: false,
      }}
    >
      {ListBottomTab &&
        ListBottomTab.map((bottomTab, index) => {
          const bottomTabIcon = ({
            color,
            focused,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            return CreateBottomTabIcon(bottomTab.iconName, focused, color);
          };

          return (
            <BottomTab.Screen
              options={{
                tabBarIcon: bottomTabIcon,
              }}
              name={bottomTab.screenName}
              component={bottomTab.component}
              key={index}
            />
          );
        })}
    </BottomTab.Navigator>
  );
};

const ApplicationNativeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.MAIN_BOTTOM_TAB_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenNames.MANGA} component={Manga} />
      <Stack.Screen name={ScreenNames.CHAPTER} component={Chapter} />
      <Stack.Screen name={ScreenNames.GENRE} component={Genre} />
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNames.REGISTER} component={Register} />
      <Stack.Screen
        name={ScreenNames.MAIN_BOTTOM_TAB_NAVIGATOR}
        children={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

const ApplicationNavigator = () => {
  const { Colors } = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        animated
      />
      <ApplicationNativeStackNavigator />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
