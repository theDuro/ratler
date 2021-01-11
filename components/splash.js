import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, Image } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import AssetExample from '../components/AssetExample';


export default class Splash extends React.Component {
  render() {
    return (
        <LinearGradient 
       start={[1,1]}
       end={[0.4, 0.3]}
        //colors={[ '#FFFFFF', '#000D0C', '#000D0C',]} 
        //colors={[ '#706f6f', '#f7ce2c', '#706f6f',]} 
        colors={[ '#FFFFFF', '#FFFFFF', '#706f6f',]} 
        style={styles.gradientStyles}>
          <AssetExample/>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  gradientStyles:{
   flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    height:100,
  }
})