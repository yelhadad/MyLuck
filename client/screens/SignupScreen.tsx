import { RootStackScreenProps } from "../types";
import Signup from "../components/Signin";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Signup">) {
  return <Signup />;
}
