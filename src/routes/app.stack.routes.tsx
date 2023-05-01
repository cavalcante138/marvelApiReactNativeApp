import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { HeroPage } from '../screens/HeroPage';

const Stack = createStackNavigator();


export function AppStackRoutes(){

  const theme = useTheme();

  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.white },
    }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ 
          headerShown: false,
         }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
         }}
      />
      <Stack.Screen
        name="HeroPage"
        component={HeroPage}
      />
    </Stack.Navigator>
  );
}