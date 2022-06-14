import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import { useNavigation } from "@react-navigation/native";
import { SettingsStackParamList, SettingsStackScreemProps } from "../types";
import { NavigationProp } from "@react-navigation/native";
import { SettingsNavigation } from "../types";

export default function Settings() {
  const navigation = useNavigation<SettingsNavigation>();
  return (
    <ScrollView>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AccountScreen")}
          style={styles.helpLink}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SecurityScreen")}
          style={styles.helpLink}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Security
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => navigation.navigate("PrivacyScreen")}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Privacy
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Notifications
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HelpScreen")}
          style={styles.helpLink}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AboutScreen")}
          style={styles.helpLink}
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            About
          </Text>
        </TouchableOpacity>
      </View>
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
