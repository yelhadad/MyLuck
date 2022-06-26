import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewPost from "../../components/NewPost";
import NewPostButton from "../../components/NewPostButton";
import HomeScreen from "../../screens/home-screens/HomeScreen";
import { HomeStackParamList } from "../../types";
import OrderAppointmentScreen from "../../screens/home-screens/OrderAppointmentScreen";
import ConfirmNewApointmentScreen from "../../screens/home-screens/ConfirmNewApointmentScreen";

//const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerRight: () => {
            return <NewPostButton />;
          },
        }}
      />
      <HomeStack.Screen name="NewPost" component={NewPost} />
      <HomeStack.Screen
        name="OrderApointmentScreen"
        component={OrderAppointmentScreen}
      />
      <HomeStack.Screen
        name="ConfirmNewApointmentScreen"
        component={ConfirmNewApointmentScreen}
      />
    </HomeStack.Navigator>
  );
}
