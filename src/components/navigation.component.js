import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './home.component';
import {SignInScreen} from './sign-in.component';
import {SignUpScreen} from './sign-up.component';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const PersonIcon = (props) => <Icon {...props} name="person" />;

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="LOGIN" icon={PersonIcon} />
    <BottomNavigationTab title="SIGN UP" icon={PersonIcon} />
    <BottomNavigationTab title="HOME" icon={HomeIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
