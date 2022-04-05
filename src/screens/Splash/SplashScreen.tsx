import React from 'react'
import { StyleSheet, View, ImageBackground, Image, Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

//Logo
import Logo from "../../../assets/logo.png"

//Background
import BackgroundImage from "../../../assets/bcaletrail_bkg_750x1356.jpg"


const SplashScreen = () => {

  const edges = useSafeAreaInsets();


  return <View style={styles.container}>
    <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.backgroundImage}>
    <Animated.View style={styles.logoImage}>
    <Image source={Logo} />
    </Animated.View>
    </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  },
  logoImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SplashScreen
