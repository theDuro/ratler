//tworzenie nawigacji
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/home';
import Test from '../screens/test';
import Results from '../screens/results';
import Header from '../shared/header';
import HeaderTest from '../shared/headerTest';
import HeaderResults from '../shared/headerResults';

const { Navigator, Screen } = createStackNavigator();

export const TestStack = ({ navigation }) => (

  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}>

    <Screen
      name='Test'
      component={Test}
      options = {{
        headerTitle: () => <HeaderTest navigation={navigation}/>
       }}
    />
  </Navigator>
);

export default TestStack;
