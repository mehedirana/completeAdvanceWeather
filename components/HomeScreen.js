import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Header from './Header';

class HomeScreen extends React.Component {

  state = {
    info: {
      name: 'loading',
      temp: 'loading',
      humidity: 'loading',
      description: 'loading',
      icon: 'loading'
    }
  }

  getWeather = () => {

    cityName = "dhaka";
    try {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=d7b1023e1d8d23485e603f31d14d9157`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          info:
          {
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather[0].icon
          }
        })

        console.log("here data:")
        console.log(this.state)
      })

    }
    catch (error) {
 
      Alert.alert("Error"+ error.message+"please connect to internet",[{text: "ok"}])
    }
    
  }

  componentDidMount() {
    this.getWeather()
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
