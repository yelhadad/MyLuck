import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import Calendar from "../components/CalendarsExamples";

export default function CalanderScreenExamples({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <Calendar />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
