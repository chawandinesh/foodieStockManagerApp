import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  AboutUsScreen,
  Categories,
  Details,
  Form,
  AllDetails,
  Welcome,
} from '../screens';
import {FoodieStockManagerContext} from '../screens/context'
const Stack = createStackNavigator();
export default function Route() {

  const {state,setState} = React.useContext(FoodieStockManagerContext)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={state["welcome"] ? "Welcome" : "Home"} screenOptions={{headerTintColor:'#000'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#fcba03',
            },
          }}
        />
        <Stack.Screen name="About" component={AboutUsScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="AllDetails" component={AllDetails} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
