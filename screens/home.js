import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';
//tests
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Test from '../screens/test';
import Home from '../screens/home';
import Results from '../screens/results';
import HomeStack from '../routes/homeStack';
import { AppNavigator } from '../routes/drawer';


export default function home({ navigation }) {
  
  let [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf')
  });

  const pressHandlerRes = () => {
    navigation.navigate('Results');
  };

  const test1 = [
    {
        id: '1',
        question: 'Kto jest mistrzem ufc w 93 kg',
        answers: [
          {
          content: "Jan Błachowicz",
          isCorrect: "true"
          },
          {
          content: "Thiago Santos",
          isCorrect: "false"
          },
          {
          content: "Dominick Reyes",
          isCorrect: "false"
          },
          {
          content: "Chuck Norris",
          isCorrect: "false"
          },
        ],
        duration: 8
    },
        {
        id: '2',
        question: 'ile jest pasów w bjj',
        answers: [
          {
          content: "1",
          isCorrect: "false"
          },
          {
          content: "5",
          isCorrect: "true"
          },
          {
          content: "3",
          isCorrect: "false"
          },
          {
          content: "2",
          isCorrect: "false"
          },
        ],
        duration: 10
    },
        {
        id: '3',
        question: 'w jakiej wadze wlaczył Gołota',
        answers: [
          {
          content: "cieżkiej",
          isCorrect: "true"
          },
          {
          content: "lekkiej",
          isCorrect: "false"
          },
          {
          content: "piurkowej",
          isCorrect: "false"
          },
          {
          content: "muszej",
          isCorrect: "false"
          },
        ],
        duration: 8,
    },
  ];


  const test2 = [
    {
        id: '1',
        question: '2^32 = ?',
        answers: [
          {
          content: "4294967296",
          isCorrect: "true"
          },
          {
          content: "1024",
          isCorrect: "false"
          },
          {
          content: "4^16",
          isCorrect: "true"
          },
          {
          content: "8192",
          isCorrect: "false"
          },
        ],
        duration: 10,
    },
        {
        id: '2',
        question: '6!= ?',
        answers: [
          {
          content: "720",
          isCorrect: "true"
          },
          {
          content: "36",
          isCorrect: "false"
          },
          {
          content: "6",
          isCorrect: "false"
          },
        ],
        duration: 8,
    },
        {
        id: '3',
        question: 'Jaką postać ma liczba zespolona?',
        answers: [
          {
          content: "a+bi",
          isCorrect: "true"
          },
          {
          content: "ai+bi",
          isCorrect: "false"
          },
          {
          content: "ax+bi",
          isCorrect: "false"
          }
        ],
        duration: 5
    },
  ];

    const test3 = [
    {
        id: '1',
        question: 'spadek wartosci pieniadza nazywamy',
        answers: [
          {
          content: "inflacją",
          isCorrect: "true"
          },
          {
          content: "deflacja",
          isCorrect: "false"
          },
          {
          content: "recesja",
          isCorrect: "false"
          },
          {
          content: "depresja",
          isCorrect: "false"
          },
        ],
        duration: 8
    },
        {
        id: '2',
        question: 'ludzie grający na spadkach giełdynazywamy?',
        answers: [
          {
          content: "bykami",
          isCorrect: "true"
          },
          {
          content: "niedziwiedzimi",
          isCorrect: "false"
          },
          {
          content: "świniami",
          isCorrect: "false"
          },
          {
          content: "końmi",
          isCorrect: "false"
          }
        ],
        duration: 10
    },
        {
        id: '3',
        question: 'od kiedy dolarprzestał miec pokrycie w złocie',
        answers: [
          {
          content: "1913",
          isCorrect: "true"
          },
          {
          content: "1928",
          isCorrect: "false"
          },
          {
          content: "1922",
          isCorrect: "false"
          }
        ],
        duration: 8
    },
  ];

    const test4 = [
    {
        id: '1',
        question: 'ile izotopów ma wodór ?',
        answers: [
          {
          content: "3",
          isCorrect: "true"
          },
          {
          content: "2",
          isCorrect: "false"
          },
          {
          content: "1",
          isCorrect: "false"
          }
        ],
        duration: 6
    },
        {
        id: '2',
        question: 'ile wynosi przyspieszenie ziemskie',
        answers: [
          {
          content: "10 m/s",
          isCorrect: "false"
          },
          {
          content: "10 m/s",
          isCorrect: "false"
          },
          {
          content: "9.81 m/s^2",
          isCorrect: "true"
          },
          {
          content: "9.81 m/s",
          isCorrect: "false"
          },
        ],
        duration: 6
    },
    {
        id: '3',
        question: 'ile warzy atom hellu?',
        answers: [
          {
          content: "4u",
          isCorrect: "true"
          },
          {
          content: "8u",
          isCorrect: "false"
          },
          {
          content: "3u",
          isCorrect: "false"
          },
          {
          content: "6u",
          isCorrect: "false"
          },
        ],
        duration: 6
    },
  ];



  const testList = [
    {
      id: '1',
      title: 'Sporty Walki',
    },
    {
      id: '2',
      title: 'Matematyka',
    },
    {
      id: '3',
      title: 'Ekonomia',
    },
    {
      id: '4',
      title: 'Fzizyka',
    },
  ];

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  const selectedId = null;

  //przejscie do testu
  const setSelectedId = (id) => {
    if(id == '1') {navigation.navigate('Test', {data: test1, type: testList[0].title});}
    if(id == '2') {navigation.navigate('Test', {data: test2, type: testList[1].title});}
    if(id == '3') {navigation.navigate('Test', {data: test3, type: testList[2].title});}
    if(id == '4') {navigation.navigate('Test', {data: test4, type: testList[3].title});}
  }

  const renderItem = ({ item }) => {
    const backgroundColor ='#297a07';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={styles.button}
      />
    );
  };

  return (
    <View>

      <FlatList
        data={testList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.button2}
        onPress={() => pressHandlerRes()}>
        <Text style={styles.text}>Show results</Text>
      </TouchableOpacity>
      
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#35960c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'OpenSans',
    fontSize: 20,
  },
  button2: {
    backgroundColor: '#35960c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
