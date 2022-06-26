import { View, Text } from "../../components/Themed";
import { HomeStackScreemProps, RootTabScreenProps } from "../../types";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import SinglePost from "../../components/SinglePost";
import Colors from "../../constants/Colors";

export default function HomeScreen({
  navigation,
}: HomeStackScreemProps<"HomeScreen">) {
  return (
    <ScrollView>
      <SinglePost title="hi" description="hi" image={"fdgd"} />
      <SinglePost title="hi" description="hi" image={"fdgd"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
