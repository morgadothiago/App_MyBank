import { useState, useEffect } from 'react';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Home from './src/screens/main';

import Loading from './src/components/Loading';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000)
  }, [])



  return (
    <>
      <StatusBar translucent style='light' />
      {

        isLoading ? <Home /> : <Loading />
      }
    </>
  );
}