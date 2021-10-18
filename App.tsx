import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import { Home } from './src/screens/Home';
import { Background } from './src/components/Background'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium
  });

  if (!fontsLoaded) { //só vai para o app após carregar tudo
    return <AppLoading />
  }
  return (
    <Background>
      <StatusBar //barra de status translucida
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}
