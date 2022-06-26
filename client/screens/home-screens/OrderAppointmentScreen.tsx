import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet } from "react-native";
import Calendar from "../../components/CalendarsExamples";
import OrderAppoointment from "../../components/OrderAppointment";

export default function OrderAppointmentScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <OrderAppoointment />;
}

const styles = StyleSheet.create({});
