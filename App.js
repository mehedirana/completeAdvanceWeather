import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Card, List} from 'react-native-paper';
import Header from './components/Header'

class App extends React.Component {

  state = {
    text: '',
    city: []
  }

  fetchCity=(text)=>{

    this.setState({text})
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    .then(data=>{
      return data.json();
    })
    .then(data2=>{
     
      this.setState({
        city:data2.RESULTS.slice(0,9)
      })
    })
    console.log(this.state.city)
  }
  render() {
    cityList = <Card><List.Item title="no city"/></Card>
    if(this.state.city.length>0){
      cityList = this.state.city.map(cities=>{
      return (
        <Card><List.Item title={cities.name}/></Card>
      )
    })
    return (
      <View style={styles.container}>
        <Header/>
        <TextInput
          label='Email'
          value={this.state.text}
          onChangeText={text => this.fetchCity(text)}
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }

}
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
