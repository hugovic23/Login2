import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './pantallas/registro';
import Login from './pantallas/login';
import Principal from './pantallas/Principal';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Registro" component={Registro}/>
          <Stack.Screen name="Principal" component={Principal}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;