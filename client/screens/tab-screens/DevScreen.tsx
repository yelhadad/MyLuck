import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet, Button, ScrollView } from "react-native";
import SinglePost from "../../components/SinglePost";
import Signin from "../../components/auth/Signin";
import Signup from "../../components/auth/Signup";
import SignupScreen from "../auth/SignupScreen";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import ExpoCameraExample from "../../components/ExpoCameraExample";
import OrderAppoointment from "../../components/OrderAppointment";
export default function DevScreen({ navigation }: RootTabScreenProps<"Dev">) {
  return <OrderAppoointment />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
