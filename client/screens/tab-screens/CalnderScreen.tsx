import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet } from "react-native";
import CalendarPage from "../../components/CalendarPage";

export default function CalanderScreen({
  navigation,
}: RootTabScreenProps<"Calendar">) {
  return <CalendarPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
