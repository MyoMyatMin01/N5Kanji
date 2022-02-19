import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";
import Draw from "../screens/Draw";

let { Navigator, Screen } = createStackNavigator();

const MainAndSketchNavigator = () => (
    <Navigator headerMode="none">
    <Screen name="Main" component={Main} />
    <Screen name="Draw" component={Draw} />
  </Navigator>
  );

export const AppNavigator = () => (
  <NavigationContainer>
    <MainAndSketchNavigator />
  </NavigationContainer>
);
