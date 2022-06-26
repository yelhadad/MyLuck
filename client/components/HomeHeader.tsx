import { StyleSheet, SafeAreaView } from "react-native";
import { Text, View } from "../components/Themed";

export default function HomeHeader() {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>My-Luck</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  view: {
    backgroundColor: "red",
    marginTop: "10%",
    marginBottom: "2%",
    height: "50%",
    justifyContent: "center",
  },
});
