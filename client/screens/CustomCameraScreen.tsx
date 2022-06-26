import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import Calendar from "../components/CalendarsExamples";
import CustomCamera from "../components/CustomCamera";

export default function CustomCameraScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <CustomCamera />;
}
