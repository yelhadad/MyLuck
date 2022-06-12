import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet, Button } from "react-native";
import SinglePost from "../../components/SinglePost";
import Signin from "../../components/auth/Signin";
import Signup from "../../components/auth/Signup";
import SignupScreen from "../auth/SignupScreen";
import NewPost from "../../components/NewPost";
export default function DevScreen({ navigation }: RootTabScreenProps<"Dev">) {
  return (
    <>
      <NewPost />
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
