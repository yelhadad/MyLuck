import React, { useState, Fragment, useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Calendar, CalendarProps } from "react-native-calendars";
import testIDs from "../assets/calendar/testIDs";

export default function CalendarPage() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
    >
      <Fragment>
        <Text style={styles.text}>
          Calendar with marked dates and hidden arrows
        </Text>
        <Calendar
          style={styles.calendar}
          current={"2012-05-16"}
          hideExtraDays
          disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={{
            "2012-05-23": {
              selected: true,
              marked: true,
              disableTouchEvent: true,
            },
            "2012-05-24": { selected: true, marked: true, dotColor: "red" },
            "2012-05-25": {
              marked: true,
              dotColor: "red",
              disableTouchEvent: true,
            },
            "2012-05-26": { marked: true },
            "2012-05-27": {
              disabled: true,
              activeOpacity: 0,
              disableTouchEvent: false,
            },
          }}
          // disabledByDefault={true}
        />
      </Fragment>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BBF2",
  },
});
