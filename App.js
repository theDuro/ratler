import React from 'react';
import Home from './screens/home';
import { AppNavigator } from './routes/drawer';
import { Rules } from './screens/rules';
import {useEffect} from 'react';
import Splash from './components/splash';
import { AsyncStorage } from '@react-native-community/async-storage';

//export default function App() {
  
  
  //if(this.state.isLoading){
  //    return(
  //      <Splash/>
  //    )
  //}
  //return(<AppNavigator />);
      
//}
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true
    };
}

  componentDidMount(){
    this.timerID = setInterval(() => {this.tick()}, 1000);
 
  }
  tick() {
    this.setState({isLoading: false})
    return
    
  }
  render(){
    if(this.state.isLoading){
      return(
        <Splash/>
      )
  }
  if(!this.state.rulesAccepted){
  return(<AppNavigator />);
  }
  else{
   return(<Rules/>);
  }

  }
}
