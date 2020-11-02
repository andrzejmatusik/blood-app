import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preloader from '../screens/Preloader';
import Slider from '../screens/Slider';
import Home from '../screens/Home';
import Join from '../screens/Join';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false
      }}
    >
      <Stack.Screen name="Preloader" component={Preloader} />
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}