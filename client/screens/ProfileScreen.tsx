import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
