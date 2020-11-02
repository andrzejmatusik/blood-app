import React from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Wave from 'react-native-waveview';

export default function Preloader({ navigation }) {
  setTimeout(() => {
      navigation.navigate('Slider');
  }, 5000);
  return (
    <LinearGradient colors={['#ff217a', '#ff4d4d']} style={styles.container}>
      <Text style={styles.header}>B</Text>
      <Text style={styles.text}>Jak bohater</Text>
      <Wave
        style={styles.wave}
        H={200}
        waveParams={[
            {A: 85, T: 425, fill: 'rgba(255, 255, 255, .15)'},
            {A: 35, T: 225, fill: 'rgba(255, 255, 255, .35)'},
            {A: 45, T: 245, fill: 'rgba(255, 255, 255, .55)'},
            {A: 60, T: 290, fill: 'rgba(255, 255, 255, .75)'},
            {A: 75, T: 375, fill: 'rgba(255, 255, 255, .85)'}
        ]}
        animated={true}
        easing={'linear'}
        speed={30000}
        speedIncreasePerWave={20000}
      />
      <ActivityIndicator size="large" color="#ff4d4d" style={styles.indicator} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'MontserratBold',
    fontSize: 120,
    color: '#f6f6f6',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: -250,
  },
  text: {
    fontFamily: 'MontserratRegular',
    fontSize: 30,
    color: '#f6f6f6',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: -25,
  },
  wave: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  indicator: {
    position: 'absolute',
    bottom: 50,
  },
});