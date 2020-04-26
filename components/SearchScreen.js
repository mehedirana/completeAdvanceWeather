import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { TextInput, Card, List, Button } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import { FlatList } from 'react-native-gesture-handler';

const SearchScreen =({navigation})=>{
  
 const [city, setCity] = useState('')
 const [cities, setCities] = useState([])

  const fetchCity = (text) => {
    setCity(text)
    this.setState({ text })
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then(data => data.json())
      .then(data2 => {
        
          setCities(data2.RESULTS.slice(0, 9))
        
      })
  }

 const buttonClick= async()=>{
    await AsyncStorage.setItem("myCity",city)
    navigation.navigate('Cloud', {city: city})
  }

  const listClicked= async(name)=>{
     setCity(name)
     await AsyncStorage.setItem("myCity", name)
     navigation.navigate('Cloud' , {city: name})   
  }

    // cityList = <Card><List.Item title="no city" /></Card>

    // if (this.state.city.length > 0) {

    //   cityList = this.state.city.map((cities, index) => {
    //     return (
    //       <Card style={{ margin: 5 }} key={index} onPress={()=>this.listClicked(cities.name)}>
    //         <List.Item title={cities.name} key={index}/>
    //       </Card>
    //     )
    //   })
    // }

    return (
      
      <View style={styles.container}>
        <Header />

        <TextInput
          style={{ backgroundColor: '#fff' }}
          label='City'
          value={this.state.text}
          onChangeText={(text) => fetchCity(text)}
        />

        <Button theme={{colors:{primary:"#00aaff"}}} style={{backgroundColor: '#fff',margin:20, padding: 10,}} onPress={() => buttonClick()}>
          Press me
        </Button>
        <FlatList
          data ={cities}
          renderItem={({item})=>{
            return(
              <Card 
              style={{margin:3, padding:20,}}
              onPress ={()=>listClicked()}
              >
                <Text>{item.name}</Text>
              </Card>
            )
          }
        }
        keyExtractor={item=>item.name}
        />

      </View>
    );
  }

// }

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed1fc',

  },
});
