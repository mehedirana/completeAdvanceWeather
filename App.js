import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import { color } from 'react-native-reanimated';


function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5,}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={0} />;
}


const Tab = createBottomTabNavigator();
class App extends React.Component {

  render() {

    return (
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Cloud') {
                return (
                  <HomeIconWithBadge
                    name={
                      focused
                        ? 'ios-cloud'
                        : 'ios-cloud'
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Search') {
                return (
                  <Ionicons
                    name={focused ? 'ios-search' : 'ios-search'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
          })
        }
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#1976d2',
            inactiveBackgroundColor: '#1976d2',
          }}

          backgroundColor= '#1976d2'


        >
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Cloud" component={HomeScreen} />
          
        </Tab.Navigator>
      </NavigationContainer>

    )
  }

}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
