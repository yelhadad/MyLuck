import { Text, StyleSheet } from "react-native";

export function HomeHeader({ title, style }: { title: string; style: any }) {
  return <Text style={style}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    margin: "center",
    fontSize: 24,
  },
});
