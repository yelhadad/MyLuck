import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import BasicShare from "./components/basic-share";
import HomePage from "./components/HomePage";

type RootStackParamList = {
  Home: {
    yoav: string;
  };
  BaseShare: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          initialParams={{ yoav: "yoavi" }}
        />
        <Stack.Screen name="BaseShare" component={BasicShare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
