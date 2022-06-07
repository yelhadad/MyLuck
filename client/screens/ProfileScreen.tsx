import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import Profile from "../components/Profile";
export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <Profile
      followers={11}
      following={12}
      image={"fksjjkfb"}
      numOfPosts={5}
      posts={"posts"}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
