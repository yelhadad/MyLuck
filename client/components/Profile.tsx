import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

export default ({
  image,
  numOfPosts,
  followers,
  following,
  posts,
}: {
  image: string;
  numOfPosts: number;
  followers: number;
  following: number;
  posts: string;
}) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <Text> posts {numOfPosts}</Text>
        <Text>followers {followers}</Text>
        <Text>following {following}</Text>
      </View>
      <Text>posts</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    alignItems: "baseline",
  },
  posts: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    width: 40,
    height: 40,
    resizeMode: "stretch",
    flex: 2,
    flexGrow: 1,
    flexBasis: 0,
  },
});
