import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../../screens/settings-screens/AboutScreen";
import AccountScreen from "../../screens/settings-screens/AccountScreen";
import HelpScreen from "../../screens/settings-screens/HelpScreen";
import NotificationsScreen from "../../screens/settings-screens/NootificationsSreen";
import PrivacyScreen from "../../screens/settings-screens/PrivacyScreen";
import SecuritySreen from "../../screens/settings-screens/SecurityScreen";
import SettingsScreen from "../../screens/tab-screens/SettingsScreen";
import { SettingsStackParamList } from "../../types";

const Stack = createNativeStackNavigator<SettingsStackParamList>();
export default function SettingsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
      <Stack.Screen name="SecurityScreen" component={SecuritySreen} />
    </Stack.Navigator>
  );
}
