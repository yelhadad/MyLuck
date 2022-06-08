import { RootStackScreenProps } from "../types";
import Signup from "../components/Signup";
import { Button, Text } from "react-native";

export default function SignupScreen({
  navigation,
}: RootStackScreenProps<"Signup">) {
  return (
    <>
      <Signup />
      <Button
        title="already have an account? sign up!"
        onPress={() => navigation.push("Signin")}
      />
      <Text>hiiii</Text>
    </>
  );
}
