import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './src/screens/home.screen';
import {ChargeScreen} from './src/screens/charge.screen';

export const BulletIn = () => null;
export const Profile = () => null;

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="EXPLORE"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#069DFF',
          tabBarInactiveTintColor: '#000',
          tabBarActiveBackgroundColor: '#FFF',
          tabBarInactiveBackgroundColor: '#FFF',
        }}>
        <Tabs.Screen
          name="EXPLORE"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Image
                source={require('./src/assets/vector.png')}
                style={{tintColor: color, width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="CHARGE"
          component={ChargeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Image
                source={require('./src/assets/vector_2.png')}
                style={{tintColor: color, width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="BULLETIN"
          component={BulletIn}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Image
                source={require('./src/assets/vector_3.png')}
                style={{tintColor: color, width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="PROFILE"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Image
                source={require('./src/assets/vector_4.png')}
                style={{tintColor: color, width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
