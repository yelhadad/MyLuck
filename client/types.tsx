/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Signin: undefined;
  Signup: undefined;
  CosmeticianSignup: undefined;
  CalenderExamples: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  NewPost: undefined;
};

export type SettingsStackParamList = {
  SettingsScreen: undefined;
  NotificationsScreen: undefined;
  PrivacyScreen: undefined;
  SecurityScreen: undefined;
  AccountScreen: undefined;
  HelpScreen: undefined;
  AboutScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type HomeStackScreemProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, Screen>;

export type SettingsStackScreemProps<
  Screen extends keyof SettingsStackParamList
> = NativeStackScreenProps<SettingsStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Settings: undefined;
  Search: undefined;
  Calendar: undefined;
  Profile: undefined;
  Dev: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

// this type is for useNavigation hook
export type SettingsNavigation = NavigationProp<SettingsStackParamList>;
