import { useState, useEffect } from "react";
import { SinglePostProps } from "../types/post";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

export default ({ title, image, location, description }: SinglePostProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.profilePic}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
        <Text>account name</Text>
        <Text>{description}</Text>

        <Image
          style={styles.profilePic}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <Text>likes</Text>
        <Text>comments</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
  },
  title: {
    textAlign: "left",
    flex: 2,
  },
  profilePic: {
    justifyContent: "center",
    width: 40,
    height: 40,
    resizeMode: "stretch",
    flex: 2,
  },
});
