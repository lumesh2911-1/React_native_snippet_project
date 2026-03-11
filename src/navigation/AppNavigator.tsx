import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/common/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeSreen from '../screens/main/HomeSreen';
import BottomNavigationScreen from './bottom/BottomNavigationScreen';
import DrawerNavigationScreen from './drawer/DrawerNavigationScreen';
import MaterialTopTabScreen from './toptab/MaterialTopTabScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="toptab-nav">
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeSreen} />
        <Stack.Screen
          name="bottom-nav"
          component={BottomNavigationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="drawer-nav"
          component={DrawerNavigationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="toptab-nav" component={MaterialTopTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
