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
        question: 'Kto jest jednym z założycieli Microsoft?',
        answers: [
          {
          content: "Bill Gates",
          isCorrect: "true"
          },
          {
          content: "Steve Jobs",
          isCorrect: "false"
          },
          {
          content: "Elon Musk",
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
        question: 'Jaki był limit pamięci w MS-DOS?:',
        answers: [
          {
          content: "1024KB",
          isCorrect: "false"
          },
          {
          content: "640KB",
          isCorrect: "true"
          },
          {
          content: "16MB",
          isCorrect: "false"
          },
          {
          content: "128MB",
          isCorrect: "false"
          },
        ],
        duration: 10
    },
        {
        id: '3',
        question: 'Jaką ilość pamięci maksymalnie jest w systemie 32bitowym?',
        answers: [
          {
          content: "4GB",
          isCorrect: "true"
          },
          {
          content: "2GB",
          isCorrect: "false"
          },
          {
          content: "8GB",
          isCorrect: "false"
          },
          {
          content: "16GB",
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
        question: 'Jaką powierzchnię ma Watykan?',
        answers: [
          {
          content: "1km^2",
          isCorrect: "true"
          },
          {
          content: "20km^2",
          isCorrect: "false"
          },
          {
          content: "5km^2",
          isCorrect: "false"
          },
          {
          content: "10km^2",
          isCorrect: "false"
          },
        ],
        duration: 8
    },
        {
        id: '2',
        question: 'Jakie miasto jest stolicą USA?',
        answers: [
          {
          content: "Waszyngton",
          isCorrect: "true"
          },
          {
          content: "Nowy Jork",
          isCorrect: "false"
          },
          {
          content: "Miami",
          isCorrect: "false"
          },
          {
          content: "San Francisco",
          isCorrect: "false"
          }
        ],
        duration: 10
    },
        {
        id: '3',
        question: 'Na jakim kontynencie znajduje się państwo Oman?',
        answers: [
          {
          content: "Afryka",
          isCorrect: "true"
          },
          {
          content: "Azja",
          isCorrect: "false"
          },
          {
          content: "Europa",
          isCorrect: "false"
          }
        ],
        duration: 8
    },
  ];

    const test4 = [
    {
        id: '1',
        question: 'Czy wirusy zaliczamy do organizmów żywych?',
        answers: [
          {
          content: "Tak",
          isCorrect: "true"
          },
          {
          content: "Nie",
          isCorrect: "false"
          }
        ],
        duration: 6
    },
        {
        id: '2',
        question: 'Ile nóg ma stonoga?',
        answers: [
          {
          content: "8",
          isCorrect: "false"
          },
          {
          content: "100",
          isCorrect: "false"
          },
          {
          content: "24",
          isCorrect: "true"
          },
          {
          content: "16",
          isCorrect: "false"
          },
        ],
        duration: 6
    },
    {
        id: '3',
        question: 'Jakie jest najszybsze zwierzę lądowe?',
        answers: [
          {
          content: "Gepard",
          isCorrect: "true"
          },
          {
          content: "Struś",
          isCorrect: "false"
          },
          {
          content: "Antylopa",
          isCorrect: "false"
          },
          {
          content: "Tygrys",
          isCorrect: "false"
          },
        ],
        duration: 6
    },
  ];



  const testList = [
    {
      id: '1',
      title: 'Informatyka',
    },
    {
      id: '2',
      title: 'Matematyka',
    },
    {
      id: '3',
      title: 'Geografia',
    },
    {
      id: '4',
      title: 'Biologia',
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
