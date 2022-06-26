import React, { useState, useContext, createContext } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";
import {
  HomeNavigation,
  HomeRouteProps,
  HomeStackParamList,
  HomeStackScreemProps,
  ProfileNavigation,
} from "../types";
import { generateAppointmentTimes } from "../functions/generate-appointment-time";

interface AppointmeantHoursProps {
  nextScreen: string;
}

const AppointmentHeader = () => {
  const navigation = useNavigation<any>();
  const router = useRoute<HomeRouteProps>();
  const [presentedDay, setPresentedDay] = useState<Date>(new Date());
  console.log("this is navigattion state", router.key);
  return (
    <>
      <View>
        <Text style={{ textAlign: "center" }}>Yoav the barber</Text>
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headrtPrivios}
          onPress={() => {
            const x = new Date(presentedDay);
            x.setTime(x.getTime() - 86400000);
            setPresentedDay(x);
          }}
        >
          <Text style={{ fontSize: 18 }}>previos</Text>
        </TouchableOpacity>
        <Text style={styles.headerDate}>
          {presentedDay.toLocaleDateString()}
        </Text>
        <TouchableOpacity
          style={styles.headerNext}
          onPress={() => {
            const x = new Date(presentedDay);
            x.setTime(x.getTime() + 86400000);
            setPresentedDay(x);
          }}
        >
          <Text style={{ fontSize: 18 }}>next</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    </>
  );
};

const AppointmentHours = () => {
  const startHour = new Date();
  startHour.setHours(9);
  console.log(startHour);
  const endHour = new Date();
  endHour.setHours(18);
  const navigation = useNavigation<any>();
  const avanableAppointmentTimes = generateAppointmentTimes({
    startWorkTime: startHour.getTime(),
    endWorkTime: endHour.getTime(),
    tritmentTime: 40,
  });
  console.log(avanableAppointmentTimes);
  return (
    <>
      <ScrollView>
        {avanableAppointmentTimes.map((aa) => {
          let x = new Date();
          x.setTime(aa);
          return (
            <View key={aa} style={styles.helpContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ConfirmNewApointmentScreen")
                }
                style={styles.helpLink}
              >
                <Text
                  style={styles.helpLinkText}
                  lightColor={Colors.light.tint}
                >
                  {x.toLocaleTimeString()}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default function OrderAppoointment() {
  return (
    <>
      <AppointmentHeader />
      <AppointmentHours />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    position: "relative",
  },
  headerDate: {
    textAlign: "center",
    fontSize: 22,
  },
  headrtPrivios: {
    position: "absolute",
    right: "70%",
  },
  headerNext: {
    position: "absolute",
    right: "20%",
  },
  hoursContainer: {
    marginTop: 20,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
    width: "100%",
  },
  helpLinkText: {
    textAlign: "center",
  },
});
