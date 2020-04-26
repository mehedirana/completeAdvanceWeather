import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Card, List, Button } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from '@react-navigation/native';
import Header from './Header';


class SearchScreen extends React.Component{
  
  state = {
    text: '',
    city: []
  }
  componentDidUpdate=async()=>{
    await AsyncStorage.setItem("myCity",this.state.text)
    console.log("i m from search"+AsyncStorage.getItem("myCity"))  
 }

 buttonClick= async()=>{

    const { navigation } = this.props;
    await AsyncStorage.setItem("myCity",this.state.text)
    navigation.navigate('Cloud')
    // , {cities: this.state.text})
  }

  listClicked= async(name)=>{
     const { navigation } = this.props;
     this.setState({text: name})
     await AsyncStorage.setItem("myCity",this.state.text)
     navigation.navigate('Cloud')
    //  {cities: this.state.text})
    
  }

  async componentDidMount(){
    await AsyncStorage.setItem("myCity",this.state.text) 
  }
 
  fetchCity = (text) => {

    this.setState({ text })
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          city: data2.RESULTS.slice(0, 9)
        })
      })
  }

  render() {
    //console.log(this.state.city)
    cityList = <Card><List.Item title="no city" /></Card>

    if (this.state.city.length > 0) {

      cityList = this.state.city.map(cities => {
        return (
          <Card style={{ margin: 5 }} key={cities.lat} onPress={()=>this.listClicked(cities.name)}>
            <List.Item title={cities.name} />
          </Card>
        )
      })
    }

    return (
      
      <View style={styles.container}>
        <Header />

        <TextInput
          style={{ backgroundColor: '#fff' }}
          label='City'
          value={this.state.text}
          onChangeText={text => this.fetchCity(text)}
        />

        <Button theme={{colors:{primary:"#00aaff"}}} style={{backgroundColor: '#fff',margin:20, padding: 10,}} onPress={() => this.buttonClick()}>
          Press me
        </Button>
          {cityList}
      </View>
    );
  }

}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed1fc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
