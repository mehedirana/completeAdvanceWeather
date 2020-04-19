import React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Header from './Header';

class HomeScreen extends React.Component {

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
