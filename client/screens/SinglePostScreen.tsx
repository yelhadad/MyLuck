import React from "react";
import SinglePost from "../components/SinglePost";
import { RootTabScreenProps } from "../types";

export default function CustomCameraScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <SinglePost image={"ffsdf"} title={"sfsf"} description={"fsafs"} />;
}
