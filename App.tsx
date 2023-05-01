import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_900Black,
  useFonts,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';


SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_300Light, 
    Roboto_400Regular,
    Roboto_900Black,
  });

  const isFontLoaded = async () => {
      await SplashScreen.hideAsync();
  }

  useEffect(() => {
    if(fontsLoaded){
      isFontLoaded();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  );
}