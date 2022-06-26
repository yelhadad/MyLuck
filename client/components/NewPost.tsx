import { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "./Themed";
import { useForm, Controller, SetFieldValue } from "react-hook-form";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeRouteProps } from "../types";

type FormData = {
  image: SelectedImage | null;
  description: string;
  location: {
    lan: string;
    lat: string;
  };
};

interface NewPostParams {
  imageURI?: string;
}

interface SelectedImage {
  localUri?: string;
  cameraImageUri?: string;
}

// this coponent is not in use right now!!!!!
export default function NewPost() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const route = useRoute<HomeRouteProps>();

  const luanchCamera = () => {};

  const ImageDisplay = () => {
    if (route.params?.imageURI !== undefined) {
      return (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Image
                source={{ uri: value?.cameraImageUri }}
                style={styles.thumbnail}
              />
            </>
          )}
          name="image"
        />
      );
    } else if (getValues("image.localUri") !== undefined) {
      return (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Image
                source={{ uri: value?.localUri }}
                style={styles.thumbnail}
              />
            </>
          )}
          name="image"
        />
      );
    } else {
      return null;
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      location: {
        lan: "",
        lat: "",
      },
    },
  });

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // set image state
    if (pickerResult.cancelled === true) {
      return;
    }
    setValue("image.localUri", pickerResult.uri);
    setValue("image.cameraImageUri", undefined);
  };

  const [previosImageUriRouteParam, setPreviosImageUriRouteParam] = useState(
    route.params?.imageURI
  );

  if (
    route.params?.imageURI !== undefined &&
    route.params?.imageURI !== previosImageUriRouteParam
  ) {
    setValue("image.cameraImageUri", route.params?.imageURI);
    setValue("image.localUri", undefined);
    setPreviosImageUriRouteParam(route.params.imageURI);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    //dispatch(signIn({ email: "yoave14@gmail.com", isSignIn: true }));
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Post a Post</Text>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>choose picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <Text>camera</Text>
          </TouchableOpacity>
          <ImageDisplay />
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="description"
                placeholderTextColor={"black"}
              />
            )}
            name="description"
          />

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value.lan}
                  placeholder="lantitude"
                  placeholderTextColor={"black"}
                />
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value.lat}
                  placeholder="ltitude"
                  placeholderTextColor={"black"}
                />
              </>
            )}
            name="location"
          />

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    display: "flex",
    flex: 2,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontStyle: "italic",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  CameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  CameraButtonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  CameraButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  CameraText: {
    fontSize: 18,
    color: "white",
  },
});
