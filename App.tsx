import React, {useEffect} from "react"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//NavigationContainer
import MainNavigation from "./src/Navigation/MainNavigation"

//Screns
import { SplashScreen } from './src/screens'

export default function App({navigation}) {

  useEffect(() => {
    setTimeout(() => {console.log("llego"); 
    navigation.navigate("Home")}, 3000)
  }, [])

  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
