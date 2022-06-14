import { View, Text } from "../../components/Themed";
import { HomeStackScreemProps, RootTabScreenProps } from "../../types";
import { StyleSheet, TouchableOpacity } from "react-native";
import SinglePost from "../../components/SinglePost";
import Colors from "../../constants/Colors";

export default function HomeScreen({
  navigation,
}: HomeStackScreemProps<"HomeScreen">) {
  return (
    <>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewPost")}
          style={styles.helpLink}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            New Post!
          </Text>
        </TouchableOpacity>
      </View>
      <SinglePost title="hi" description="hi" image={"fdgd"} />
    </>
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
