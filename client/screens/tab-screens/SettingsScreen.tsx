import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet } from "react-native";
import Settings from "../../components/Settings";

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <Settings />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
