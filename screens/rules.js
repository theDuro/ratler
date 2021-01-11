import React from 'react';
import {Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import Home from '../screens/home';
import { AppNavigator } from '../routes/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { useFonts } from 'expo-font';
//import { AsyncStorage } from 'react-native';

export default function rules({ navigation }) {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf')
  });
  
  var state=false;
  const acceptPressed = () => {
      storeData();
      //saveValueFunction();
      console.log("PRESSED")
      navigation.navigate('Home');
  }
  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
      'key23',
      'Accepted'
      );
    } catch (error) {
      console.log(error.message)
    }
  }
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key23');
      if (value !== null) {
          console.log(value);
          state=true;
          navigation.navigate('Home');
          console.log(state)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(state)
  
  retrieveData();

  return(
  <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>Rules</Text>
        <Text style={styles.text2}>No cheating</Text>
        <Button title="Accept" onPress={() => acceptPressed()} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  scrollView: {
   flex: 1,
   backgroundColor: '#006da2',
   alignItems: 'center',
   justifyContent: 'center',
 },
 text: {
   color: 'white',
   fontSize: 24,
   fontFamily: 'OpenSans'
 },
 text2: {
   marginVertical: 60,
   color: 'white',
   fontSize: 20,
   fontFamily: 'OpenSans'
 }
});