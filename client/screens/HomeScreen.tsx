import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import SinglePost from "../components/SinglePost";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return <SinglePost title="hi" description="hi" image={"fdgd"} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
