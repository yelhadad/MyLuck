import { useState, useEffect } from "react";
import { SinglePostProps } from "../types/post";
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "../components/Themed";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../types";

const PostHeader = () => {
  const navigation = useNavigation<HomeNavigation>();
  return (
    <View style={styles.profileHeader}>
      <Image
        style={styles.imageHeader}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <TouchableOpacity style={styles.helpLink}>
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          account name
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpLink}>
        <Text
          style={styles.helpLinkText}
          lightColor={Colors.light.tint}
          onPress={() => navigation.navigate("OrderApointmentScreen")}
        >
          order line
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = () => {
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.profileImage}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    </View>
  );
};

const PostBottom = () => {
  return (
    <>
      <View style={styles.likesAndCommentsView}>
        <Text>likes</Text>
        <Text>comments</Text>
      </View>

      <Text>
        Here is the discription for the given post if edit the discription for
        your post!!!
      </Text>
    </>
  );
};

export default ({ title, image, location, description }: SinglePostProps) => {
  return (
    <>
      <PostHeader />
      <PostImage />
      <PostBottom />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  profileHeader: {
    flexDirection: "row",
    flex: 2,
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageHeader: {
    borderRadius: 500,
    width: 50,
    height: 50,
  },
  title: {
    textAlign: "left",
    flex: 2,
  },
  imageView: {
    height: 300,
    backgroundColor: "pink",
  },
  profileImage: {
    height: "100%",
  },
  likesAndCommentsView: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
