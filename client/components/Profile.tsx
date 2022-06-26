import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
interface Logo {
  index: number;
  uri: string;
}

const reactLogoArray: Logo[] = [];
const logoUri = "https://reactnative.dev/img/tiny_logo.png";

for (let i = 0; i < 20; i++) {
  reactLogoArray.push({ index: i, uri: logoUri });
}

console.log(reactLogoArray);

const mapedPosts = () => {
  return reactLogoArray.map((element) => {
    return (
      <>
        <Image
          key={element.index}
          style={{ width: 100, height: 100, margin: 5, resizeMode: "contain" }}
          source={{ uri: element.uri }}
        />
      </>
    );
  });
};

const mapedLogos = mapedPosts();

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
      <View style={styles.globalView}>
        <View style={styles.monoView}>
          <Image
            style={styles.image}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
        <View style={styles.monoView}>
          <Text style={styles.posts}> Posts </Text>
          <Text style={styles.posts}>{numOfPosts} </Text>
        </View>
        <View style={styles.monoView}>
          <Text style={styles.posts}>Followers </Text>
          <Text style={styles.posts}>{followers}</Text>
        </View>
        <View style={styles.monoView}>
          <Text style={styles.posts}>Following </Text>
          <Text style={styles.posts}>{following}</Text>
        </View>
      </View>
      <View style={styles.imagesGloblaView}>{mapedLogos}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  globalView: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    top: "10%",
    height: "10%",
  },
  monoView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    backgroundColor: "red",
  },
  posts: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
    borderRadius: 50,
  },
  imagesGloblaView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
    marginTop: "20%",
    backgroundColor: "pink",
    flexGrow: 1,
    padding: 5,
  },
  imagesView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  postImage: {
    width: 150,
    height: 150,
  },
});
