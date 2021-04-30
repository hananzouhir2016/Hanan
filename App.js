import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Affichage from './Components/Affichage';
import Entete from './Components/Entete';
import menu from './Components/menu';
import Vent from './Components/Vent';
import Temperature from './Components/Temperature';
import Evatranspiration from './Components/Evatranspiration';
import Humidite from './Components/Humidite';
import precipitation from './Components/precipitation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="menu" component={Affichage} />
      <Stack.Screen name="Notifications" component={Entete} />
      <Stack.Screen name="Profile" component={menu} />
      <Stack.Screen name="Profile1" component={Vent} />
      <Stack.Screen name="Profile2" component={Temperature} />
      <Stack.Screen name="Profile3" component={Evatranspiration} />
      <Stack.Screen name="Profile4" component={Humidite} />
      <Stack.Screen name="Profile5" component={precipitation} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
