import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image, AsyncStorage } from 'react-native';
import Header from './Header';
import { Card, List, Title } from 'react-native-paper';
import { color } from 'react-native-reanimated';
class HomeScreen extends React.Component {

  state = {
    info: {
      name: 'loading',
      temp: 'loading',
      humidity: 'loading',
      description: 'loading',
      icon: 'loading'
    }
  };

  componentDidUpdate=async()=>{
    AsyncStorage.getItem("myCity")
    console.log("i m from storage"+AsyncStorage.getItem("myCity"))  
 }
  getWeather = async () => {
    
  //  // const { itemId } = navigation.getParam('cities', 'dhaka');
  //   const { otherParam } = route.params;
  
  console.log(AsyncStorage.getItem("myCity"))  
      cityName = "dhaka"

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

      Alert.alert("Error" + error.message + "please connect to internet", [{ text: "ok" }])
    }

  }

  async componentDidMount() {
    this.getWeather()
    console.log("i am from hmeeeeeeeeeeeeeeeeeeeeee....."+key)
  }
  render() {
  

    return (
      <View style={styles.container}>
        <Header />

        <Card style={{margin:20}}>
          <View style ={{padding: 20, alignItems:'center'}}>
              <Image
              style={{width:120, height:120, justifyContent: 'center'}}
              source={{uri:'http://openweathermap.org/img/w/' + this.state.info.icon + ".png"}}
              />
              <Title style={styles.text}>{this.state.info.name}</Title>
              <Title style={styles.text}>Temparature: {this.state.info.temp}</Title>
              <Title style={styles.text}>Humidity: {this.state.info.humidity}</Title>
              <Title style={styles.text}>Description: {this.state.info.description}</Title>
              
          </View>
        </Card>

      </View>
    );
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed1fc',
   // alignItems: 'center',
    //justifyContent: 'center',
  },

  text:{

    textAlign: 'center',
    color:'#0d47a1',
    fontSize: 20,
    fontWeight: 'bold'
    
  }
});
