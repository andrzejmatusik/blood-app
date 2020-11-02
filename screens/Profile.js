import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, SimpleLineIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import News from '../components/News';

export default function Profile({ navigation, route }) {
  const user = route.params.user;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <AntDesign style={styles.backArrow} name="arrowleft" />
          <Text style={styles.backText}>{user.name}</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={user.image}
          />
          <View>
            <View style={styles.info}>
              <View style={styles.column}>
                {user.sex === "Mężczyzna" ? (
                  <SimpleLineIcons style={styles.columnIcon} name="symbol-male" />
                ) : (
                  <SimpleLineIcons style={styles.columnIcon} name="symbol-female" />
                )}
                <Text style={styles.columnText}>Płeć</Text>
              </View>
              <View style={styles.column}>
                <Text style={[styles.columnIcon, {marginVertical: -5}]}>{user.blood}</Text>
                <Text style={styles.columnText}>Grupa</Text>
              </View>
              <View style={styles.column}>
                <SimpleLineIcons style={styles.columnIcon} name="envelope" />
                <Text style={styles.columnText}>Poczta</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity>
                <LinearGradient colors={["#ff217a", "#ff4d4d"]} start={{ x: 0, y: .5 }} end={{ x: 1, y: .5 }} style={[styles.button, styles.buttonColor]}>
                  <SimpleLineIcons style={styles.buttonIcon} name="star" />
                  <Text style={[styles.buttonText, styles.buttonColorText]}>Bohater</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonWhite]}>
                <Text style={[styles.buttonText, styles.buttonWhiteText]}>Premium</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.about}>
          <View style={styles.location}>
            <SimpleLineIcons style={styles.locationIcon} name="location-pin" />
            <Text style={styles.locationText}>Polska</Text>
          </View>
          <Text style={styles.aboutText}>Zasłużony Honorowy Dawcy Krwi - oddał 20 litrów krwi lub odpowiadającą tej objętości ilość innych jej składników.</Text>
        </View>
      </View>
      <View style={styles.news}>
        <View style={styles.newsHeader}>
          <Text style={styles.newsText}>Aktualności</Text>
        </View>
        <News />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#7f868c',
    marginRight: 20,
  },
  backText: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
    color: '#0a0819',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  profileImg: {
    borderWidth: 3,
    borderColor: '#ecf1f5',
    borderRadius: 100,
    marginRight: 15,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  columnIcon: {
    fontFamily: 'MontserratRegular',
    fontSize: 22,
    color: '#cf334b',
  },
  columnText: {
    fontFamily: 'MontserratRegular',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 17.5,
  },
  buttonColor: {
    borderColor: '#ff4d4d',
  },
  buttonWhite: {
    borderColor: '#e3e3e3',
  },
  buttonIcon: {
    color: '#fff',
    marginRight: 5,
  },
  buttonText: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  buttonColorText: {
    fontFamily: 'MontserratRegular',
    color: '#fff',
  },
  buttonWhiteText: {
    fontFamily: 'MontserratBold',
    color: '#ff4d4d',
  },
  about: {
    marginTop: 20,
  },
  aboutText: {
    color: '#76848b',
    marginTop: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    color: '#0a0819',
    marginRight: 5,
  },
  locationText: {
    color: '#0a0819',
  },
  news: {
    marginTop: 20,
  },
  newsHeader: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#e3e3e3',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  newsText: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#0a0819',
    textTransform: 'uppercase',
  },
});