import { RootStackScreenProps } from "../types";
import Signin from "../components/Signin";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Signin">) {
  return <Signin />;
}
