import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import SinglePost from "../components/SinglePost";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
export default function DevScreen({ navigation }: RootTabScreenProps<"Dev">) {
  return <Signup />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
