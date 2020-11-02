import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { SignButton } from '../components/Buttons';

export default function Home({ navigation }) {
  return (
    <LinearGradient colors={['#ff217a', '#ff4d4d']} style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="fadeIn">
          <Image
            style={styles.img}
            source={require('../assets/images/home_bg.png')}
          />
        </Animatable.View>
      </View>
      <Svg 
        style={styles.wave}
        viewBox='0 50 1440 320'
      >
        <Path
          fill='#fff'
          d='M0,224L120,197.3C240,171,480,117,720,128C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
        />
      </Svg>
      <View style={styles.content}>
        <Text style={styles.title}>Panel logowania</Text>
        <TouchableOpacity>
          <SignButton
            style={styles.facebookButton}
            icon={require('../assets/icons/facebook.png')}
            title='Facebook'
            color='#fff'
            onPress={() => Alert.alert('Ups!', 'Ta funkcja jest chwilowo nieczynna. Kliknij "Dołącz".')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SignButton
            style={styles.regularButton}
            icon={require('../assets/icons/google.png')}
            title='Google'
            color='#0a0819'
            onPress={() => Alert.alert('Ups!', 'Ta funkcja jest chwilowo nieczynna. Kliknij "Dołącz".')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SignButton
            style={styles.regularButton}
            icon={require('../assets/icons/join.png')}
            title='Dołącz'
            color='#0a0819'
            onPress={() => navigation.navigate('Join')}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1.325,
    justifyContent: 'center',
    
  },
  img: {
    marginTop: -(width * .055),
    width: width * .775,
    resizeMode: 'contain',
  },
  wave: {
    position: 'absolute',
    height: '70%',
    width,
  },
  content: {
    flex: 1.675,
    backgroundColor: '#fff',
    height,
    width: '100%',
  },
  title: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
    color: '#0a0819',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 55,
  },
  facebookButton: {
    borderColor: '#2d509b',
    backgroundColor: '#2d509b',
  },
  regularButton: {
    borderColor: '#c9c9c9',
  },
});