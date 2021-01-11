import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Home from '../screens/home';
import { useFonts } from 'expo-font';

export default function results({ route, navigation }){
  let [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf')
  });
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const pressHandlerHome = () => {
    navigation.navigate('Home');
  }

  let Score = null;
  let Total = null;
  let Type = null;
  
  if( route.params ){
  Score =  route.params.res;
  Total =  route.params.total;
  Type =  route.params.type;
  }

  const [refreshing, setRefreshing] = React.useState(true);
  const [viewTestInfo, setViewTestInfo] = React.useState(false);
  const [showTestDetails, setShowTestDetails] = React.useState(false);

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [testInfoData, setTestInfoData] = React.useState([]);
  const [testListData, setTestListData] = React.useState([]);
  
  const onRefresh = React.useCallback(() => {
    getData()
    wait(200).then(() => setRefreshing(false));
  }, []);
  
  



  const getData = () => {
    fetch('https://tgryl.pl/quiz/results')
      .then((response) => response.json())
      // If response is in json then in success
      .then((responseJson) => {
        //Success
        setData(responseJson);
        //console.log(responseJson);
      })
      // If response is not in json then in error
      .catch((error) => {
        //Error
        //alert(JSON.stringify(error));
        console.error(error);
      });
  };
  
  const showList = (id) => {

    getTestListInfo();
    setViewTestInfo(true)
    setRefreshing(true)

  }
  const setSelectedId = (id) => {
    getTestInfo(id);
    setShowTestDetails(true)
    setRefreshing(true)
  }

  const getTestInfo = (id) => {
    fetch('https://tgryl.pl/quiz/test/'+id)
      .then((response) => response.json())
      .then((responseJson) => {
        //alert(JSON.stringify(responseJson));
        setTestInfoData(responseJson);
        //console.log(responseJson);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  const getTestListInfo = () => {
    fetch('https://tgryl.pl/quiz/tests')
      .then((response) => response.json())
      .then((responseJson) => {
        //alert(JSON.stringify(responseJson));
        setTestListData(responseJson);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  if(refreshing==true){onRefresh()}
  //console.log(data)
  //console.log(testInfoData)
  //console.log("r"+viewTestInfo+"t"+showTestDetails)

//resultListRender
  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.nick}</Text>
      <Text style={styles.text}>{item.score}</Text>
      <Text style={styles.text}>{item.total}</Text>
      <Text style={styles.text}>{item.type}</Text>
      <Text style={styles.text}>{item.date}</Text>
      <Text style={styles.text}>{item.createdOn}</Text>
    </TouchableOpacity>
  );

  
  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() => showList(item.id)}
        style={styles.button}
      />
    );
  };
  //list of tests render
  const ItemT = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.tags}</Text>
    </TouchableOpacity>
  );

  
  const renderItemT = ({ item }) => {

    return (
      <ItemT
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={styles.button}
      />
    );
  };

  //testDetails
  const ItemDetails = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.text}>{item.tags.stringify}</Text>
      <Text style={styles.text}>{item.level}</Text>
      <Text style={styles.text}>{item.tasks.stringify}</Text>
    </TouchableOpacity>
  );

  
  const renderItemTDetails = ({ item }) => {

    return (
      <ItemDetails
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={styles.button}
      />
    );
  };

  this.state = {
     isFetching: false,
  };

  //if(viewTestInfo){
    //console.log("testInfoView")
    return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      </ScrollView>
      {!viewTestInfo ? (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={() => onRefresh()}
        refreshing={this.state.isFetching}
      />) : 
        (!showTestDetails ? 
          (<FlatList
        data={testListData}
        renderItem={renderItemT}
        keyExtractor={itemT => itemT.id}
        onRefresh={() => onRefresh()}
        refreshing={this.state.isFetching}
        />): 
          (<Text>{testInfoData.name}{"\n"}{testInfoData.description}{"\n"}
          Poziom: {testInfoData.level}</Text>)
        )
      }
      <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
          <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button}
                            onPress={()=> showList() }>
          <Text style={styles.text}>Show Test List</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#35960c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3
  },
  container: {
    padding: 24
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  scrollView: {
   flex: 1,
   backgroundColor: '#006da2',
   alignItems: 'center',
   justifyContent: 'center',
 },

 text: {
   color: 'white',
   fontFamily: 'OpenSans',
   fontSize: 20
 },
});
