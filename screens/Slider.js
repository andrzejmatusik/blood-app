import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default function Slider({ navigation }) {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationDefaultColor="#e64b47"
        paginationActiveColor="#fff"
        paginationStyle={{
          marginBottom: 100
        }}
        paginationStyleItem={{
          height: 10,
          width: 10
        }}
      >
      {/* first slide */}
      <View style={styles.child}>
        <View style={styles.content}>
          <Animatable.View animation="zoomInUp" style={styles.circle}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.aFirst}>
              <Image source={require("../assets/images/slider_01_a.png")} />
            </Animatable.View>
            <Animatable.View animation="fadeInRight" delay={1000} style={styles.aSecond}>
              <Image source={require("../assets/images/slider_01_b.png")} />
            </Animatable.View>
          </Animatable.View>
        </View>
        <Svg 
          style={styles.wave}
          viewBox="0 -95 1440 320"
        >
          <Path
            fill="#fe2a53"
            d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
        <LinearGradient colors={['#fe2a53', '#ff504b']} style={styles.footer}>
          <Text style={styles.footerTitle}>Droga dawcy</Text>
          <Text style={styles.footerText}>Przed oddaniem krwi koniecznie zjedz lekki posiłek. Pij dużo soków owocowych i wody.</Text>
        </LinearGradient>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* second slide */}
      <View style={styles.child}>
        <View style={styles.content}>
          <Animatable.View animation="zoomInUp" style={styles.circle}>
            <Animatable.View animation="fadeInDown" delay={500} style={styles.bFirst}>
              <Image source={require("../assets/images/slider_02_a.png")} />
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={1000} style={styles.bSecond}>
              <Image source={require("../assets/images/slider_02_b.png")} />
            </Animatable.View>
          </Animatable.View>
        </View>
        <Svg 
          style={styles.wave}
          viewBox="0 -95 1440 320"
        >
          <Path
            fill="#fe2a53"
            d="M0,160L80,133.3C160,107,320,53,480,80C640,107,800,213,960,256C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
        <LinearGradient colors={['#fe2a53', '#ff504b']} style={styles.footer}>
          <Text style={styles.footerTitle}>Pierwszy raz</Text>
          <Text style={styles.footerText}>Zabierz ze sobą kogoś do towarzystwa. Poczujesz się pewniej, a przede wszystkim bezpieczniej.</Text>
        </LinearGradient>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* third slide */}
      <View style={styles.child}>
        <View style={styles.content}>
          <Animatable.View animation="zoomInUp" style={styles.circle}>
            <Animatable.View animation="fadeIn" delay={500} style={styles.cFirst}>
              <Image source={require("../assets/images/slider_03_a.png")} />
            </Animatable.View>
            <Animatable.View animation="fadeIn" delay={1000} style={styles.cSecond}>
              <Image source={require("../assets/images/slider_03_b.png")} />
            </Animatable.View>
          </Animatable.View>
        </View>
        <Svg 
          style={styles.wave}
          viewBox="0 -95 1440 320"
        >
          <Path
            fill="#fe2a53"
            d="M0,192L80,208C160,224,320,256,480,277.3C640,299,800,309,960,272C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
        <LinearGradient colors={['#fe2a53', '#ff504b']} style={styles.footer}>
          <Text style={styles.footerTitle}>Przywileje dawców</Text>
          <Text style={styles.footerText}>W ramach podziękowania zostały stworzone uprawnienia, będące wyrazem wdzięczności za pomoc.</Text>
        </LinearGradient>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SwiperFlatList>
    </View>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  child: {
    alignItems: 'center',
    width,
  },
  wave: {
    position: 'absolute',
    height: '70%',
    width,
  },
  content: {
    flex: 2,
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 200,
    marginTop: 80,
    height: 215,
    width: 215,
  },
  aFirst: {
    position: 'absolute',
    bottom: 12,
    left: 8,
  },
  aSecond: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  bFirst: {
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
  },
  bSecond: {
    position: 'absolute',
    bottom: -58,
    left: 34,
  },
  cFirst: {
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
  },
  cSecond: {
    position: 'absolute',
    top: 92,
    right: 50,
  },
  footer: {
    flex: 1,
    height,
  },
  footerTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
    color: '#f6f6f6',
    textAlign: 'center',
    marginTop: 50,
  },
  footerText: {
    fontFamily: 'MontserratLight',
    fontSize: 14,
    color: '#f6f6f6',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: '#ff504b',
    width: '100%',
  },
  buttonText: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    fontFamily: 'MontserratBold',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});