import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProfileStackParamList } from "../../types";
import OrderAppointmentScreen from "../../screens/home-screens/OrderAppointmentScreen";
import ConfirmNewApointmentScreen from "../../screens/home-screens/ConfirmNewApointmentScreen";
import ProfileScreen from "../../screens/tab-screens/ProfileScreen";
import SinglePostScreen from "../../components/SinglePost";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator id="ProfleStack">
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="OrderApointmentScreen"
        component={OrderAppointmentScreen}
      />
      <ProfileStack.Screen
        name="ConfirmNewApointmentScreen"
        component={ConfirmNewApointmentScreen}
      />
      <ProfileStack.Screen
        name="SinglePostScreen"
        component={SinglePostScreen}
      />
    </ProfileStack.Navigator>
  );
}
