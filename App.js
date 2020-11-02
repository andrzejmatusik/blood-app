import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'MontserratLight': require("./fonts/MontserratLight.ttf"),
    'MontserratRegular': require("./fonts/MontserratRegular.ttf"),
    'MontserratBold': require("./fonts/MontserratBold.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  };
}

// Layout by JITU RAUT (https://www.behance.net/invegastudio/).