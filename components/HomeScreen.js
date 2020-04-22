import React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Header from './Header';

class HomeScreen extends React.Component {
  //api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
  //key d7b1023e1d8d23485e603f31d14d9157

  getWeather=()=>{

    cityName = "dhaka";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=d7b1023e1d8d23485e603f31d14d9157`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      console.log(data)
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Header />

        <Text>I am  from home screen</Text>

      </View>
    );
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
