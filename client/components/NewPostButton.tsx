import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import {
  HomeNavigation,
  HomeStackParamList,
  HomeStackScreemProps,
} from "../types";

export default function NewPostButton() {
  const navigation = useNavigation<HomeNavigation>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewPost")}
        style={styles.helpLink}
      >
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          New Post!
        </Text>
      </TouchableOpacity>
    </View>
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
    paddingVertical: 10,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
