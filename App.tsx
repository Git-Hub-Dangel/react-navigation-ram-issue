import React from "react";
import { Button, View } from "react-native";

import { enableScreens } from 'react-native-screens';

enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ScreenOne from "./src/screens/ScreenOne";
import ScreenTwo from "./src/screens/ScreenTwo";


export default function App() {
const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator detachInactiveScreens={true}>
          <Stack.Screen name="screen-1" component={ScreenOne} options={({navigation}) => ({
              headerLeft: () => (
                <View>
                  <Button title="go to s2" onPress={() => navigation.navigate("screen-2")}/>
                  <Button title="pop" onPress={() => navigation.popToTop()}/>
                </View>
              )
          })}/>
          <Stack.Screen name="screen-2" component={ScreenTwo} options={({navigation}) => ({
              headerLeft: () => (
                <Button title="go to s1" onPress={() => navigation.navigate("screen-1")}/>
              )
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}