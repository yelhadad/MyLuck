import { RootStackScreenProps } from "../../types";
import Signin from "../../components/auth/Signin";
import React from "react";
import { Text } from "react-native";

export default function SigninScreen({
  navigation,
}: RootStackScreenProps<"Signin">) {
  return <Signin />;
}
