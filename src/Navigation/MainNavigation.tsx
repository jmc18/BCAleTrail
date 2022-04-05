import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, ImageBackground, Image, Animated } from 'react-native'

//Import Screens
import {HomeScreen, SplashScreen} from "./screens"

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screens name="Splash" component={SplashScreen} />
            <Stack.Screen  name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigation