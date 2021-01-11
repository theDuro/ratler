import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Test from '../screens/test';
import Results from '../screens/results';
import HomeStack from '../routes/homeStack';
import TestStack from '../routes/testStack';
import ResultStack from '../routes/resultStack';
import RulesStack from '../routes/rulesStack';

const { Navigator, Screen } = createDrawerNavigator();
import { AsyncStorage } from '@react-native-community/async-storage';

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('key');
    if (value !== null) {
        setShowState(value);
        console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

const storeData = async () => {
  try {
    await AsyncStorage.setItem('key', false);
  } catch (error) {
    // Error saving data
  }
};

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName="Rules">
    <Screen name="Home" component={HomeStack} />

    <Screen name="Test" component={TestStack} />

    <Screen name="Results" component={ResultStack} />

    <Screen name="Rules" component={RulesStack} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;