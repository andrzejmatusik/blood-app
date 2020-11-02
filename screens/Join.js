import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AntDesign, SimpleLineIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register({ navigation }) {
  const [user, setUser] = useState({
    name: "Lorem Ipsum",
    email: "loremipsum@noname.pl",
    sex: "Mężczyzna",
    blood: "A+",
    image: require("../assets/images/male.png")
  });
  const [blood, setBlood] = useState([
    {name: "A+", key: "1"},
    {name: "A-", key: "2"},
    {name: "B+", key: "3"},
    {name: "B-", key: "4"},
    {name: "0+", key: "5"},
    {name: "0-", key: "6"},
    {name: "AB+", key: "7"},
    {name: "AB-", key: "8"}
  ]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <AntDesign style={styles.backArrow} name="arrowleft" />
          <Text style={styles.backText}>Wróć</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <View>
            <TextInput 
              style={styles.input}
              placeholder="Imię i nazwisko"
              onChangeText={(value) => {
                setUser({...user, name: value})
              }}
            />
            <TextInput 
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={(value) => {
                setUser({...user, email: value})
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.formHeader}>Płeć</Text>
            <View style={styles.genderRow}>
              <TouchableOpacity
                style={styles.genderCircle}
                onPress={() => {
                  setUser({...user, sex: "Mężczyzna", image: require("../assets/images/male.png")})
                }}
              >
                <SimpleLineIcons
                  style={styles.genderIcon}
                  name="user"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.genderCircle} 
                onPress={() => {
                  setUser({...user, sex: "Kobieta", image: require("../assets/images/female.png")})
                }}
              >
                <SimpleLineIcons
                  style={styles.genderIcon}
                  name="user-female"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.formHeader}>Wybierz grupę krwi</Text>
            <View style={styles.bloodRow}>
              <FlatList
                data={blood}
                numColumns={6}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.bloodCircle} onPress={() => {setUser({...user, blood: item.name})}}>
                    <Text style={styles.bloodText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              style={styles.checkboxButton}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checkboxText}>Czy chcesz, by Twój e-mail był widoczny dla innych?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile", {user})}>
            <LinearGradient colors={["#ff217a", "#ff4d4d"]} start={{ x: 0, y: .5 }} end={{ x: 1, y: .5 }} style={styles.button}>
              <Text style={styles.buttonText}>Gotowe</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#ff306a',
    marginRight: 20,
  },
  backText: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
    color: '#0a0819',
  },
  form: {
    marginTop: 30,
  },
  input: {
    borderRadius: 50,
    backgroundColor: '#efefef',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  formHeader: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#0a0819',
    marginBottom: 30,
  },
  row: {
    marginTop: 30,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#a9a9a9',
    borderRadius: 100,
    marginHorizontal: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
  },
  genderIcon: {
    fontSize: 45,
    color: '#a9a9a9',
    marginTop: 10,
  },
  bloodRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bloodCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#a2a2a2',  
    borderRadius: 100,
    marginRight: 18.25,
    marginBottom: 15,
    height: 40,
    width: 40,
  },
  bloodText: {
    color: '#a2a2a2',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkboxButton: {
    marginTop: 15,
    marginRight: 5,
  },
  checkboxText: {
    color: '#0a0819',
    marginTop: 15,
  },
  button: {
    borderRadius: 50,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 15,
  },
});