import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet, Button } from "react-native";
import SinglePost from "../components/SinglePost";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import SignupScreen from "./SignupScreen";
export default function DevScreen({ navigation }: RootTabScreenProps<"Dev">) {
  return (
    <>
      <Signin />
      <Button title="Sign up!" onPress={() => navigation.push("Signup")} />
      <Button
        title="Calendar Examples!"
        onPress={() => navigation.push("CalenderExamples")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
