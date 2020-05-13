import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';
import { Card, Title } from 'react-native-paper';
import { AsyncStorage } from 'react-native';

const HomeScreen = (props) => {
  
  // const[id, setId] = useState({
  //   id: ''
  // })
    // console.log("///////////////////////////////////////////////////"+JSON.stringify(props))
    // console.log("///////////////////////////////////////////////////"+ props.route.params.otherParam)
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    description: 'loading',
    icon: 'loading',
    id: 'loading'
  })

  useEffect(()=>{
    
    getWeather()
    }, [props.route.params.city]);

  const getWeather = async () => {

    let cityName = await AsyncStorage.getItem("myCity")
      if (!cityName) {
       const { city } = props.route.params.city;
       cityName = city
      }
    try {

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=d7b1023e1d8d23485e603f31d14d9157`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data)

          setInfo({
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather[0].icon
          })

          console.log("here data:")
          console.log(info)
        })

    }
    catch (error) {

      Alert.alert("Error" + error.message + "please connect to internet", [{ text: "ok" }])
    }

  }

  // if (props.route.params.city != "dhaka") {
  //   getWeather()
  // }

  return (
    <View style={styles.container}>
      <Header />

      <Card style={{ margin: 20 }}>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Image
            style={{ width: 120, height: 120, justifyContent: 'center' }}
            source={{ uri: 'http://openweathermap.org/img/w/' + info.icon + ".png" }}
          />
          <Title style={styles.text}>{info.name}</Title>
          <Title style={styles.text}>Temparature: {info.temp}</Title>
          <Title style={styles.text}>Humidity: {info.humidity}</Title>
          <Title style={styles.text}>Description: {info.description}</Title>
          {/* <Title style={styles.text}> {city}</Title> */}

        </View>
      </Card>

    </View>
  );
}

// }

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed1fc',
    // alignItems: 'center',
    //justifyContent: 'center',
  },

  text: {

    textAlign: 'center',
    color: '#0d47a1',
    fontSize: 22,
    fontWeight: 'bold'

  }
});
