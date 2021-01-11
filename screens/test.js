import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Results from '../screens/results';
import { useState } from 'react';

export default function test({ route, navigation }){

  const pressHandlerHome = () => {
    sendData()
    navigation.navigate('Home');
  }

  const pressHandlerResults = () => {
    navigation.navigate('Results', {res: score, total: DATA.length, type: TYPE});
  }

  let DATA = null;
  let TYPE = null;

  if( route.params ){
  DATA =  route.params.data;
  TYPE = route.params.type;
  }

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswersClick = (isCorrect) => {

    if(isCorrect == "true"){
        setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < DATA.length)
    {
        setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }
  let NAME="Chuck"
  const sendData = () => {

      const payload = {
        nick: NAME,
        score: score,
        total: test.length,
        type: TYPE.toString()
      };
      console.log(payload)
      postData(payload)
  }

  const postData = (result) => {
    fetch('https://tgryl.pl/quiz/result', {
      method: 'POST', //Request Type
      body: JSON.stringify(result), //post body
      headers: {
        //Header Defination
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        console.error(error)
        console.log(result)
      });
  }
  return(
    <View>
    {showScore ? (
        <>
        <View>
        <Text style={styles.quest}>Good answers: {score}/{DATA.length}</Text>
        <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
              <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerResults() }>
              <Text style={styles.text}>Show Results</Text>
          </TouchableOpacity>
          </View>
          </>
    ) : (
      <>
    <View>
      <Text style={styles.numb}>Question {currentQuestion + 1}/{DATA.length}</Text>
      <Text style={styles.quest}>{DATA[currentQuestion].question}</Text>
          <View>
          {DATA[currentQuestion].answers.map((answers) => <TouchableOpacity 
                    style={styles.answers} onPress={() => handleAnswersClick(answers.isCorrect) }><Text style={styles.text}>       {answers.content}</Text></TouchableOpacity>)}
          </View>
          <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
              <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerResults() }>
              <Text style={styles.text}>Show Results</Text>
          </TouchableOpacity>
    </View>
    </>
    )
     }</View>
    )
   
}

const styles = StyleSheet.create({
  quest: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: '#00008b',
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'white',
    padding: 5
  },
  numb: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: '#00008b',
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'white',
    padding: 2
  },
  answers: {
    backgroundColor: '#228B22',
    justifyContent: 'center',
    padding: 12
  },
  button: {
    backgroundColor: '#006da2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16
  }
});
