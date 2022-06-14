import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPost from "../../components/NewPost";
import HomeScreen from "../../screens/tab-screens/HomeScreen";
import { HomeStackParamList } from "../../types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: "My-Luck",
          headerShadowVisible: false,
        }}
      />
      <HomeStack.Screen name="NewPost" component={NewPost} />
    </HomeStack.Navigator>
  );
}
