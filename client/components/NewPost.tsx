import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller, SetFieldValue } from "react-hook-form";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  image: SelectedImage | null;
  description: string;
  location: {
    lan: string;
    lat: string;
  };
};

interface SelectedImage {
  localUri?: string;
}
// this coponent is not in use right now!!!!!
export default function NewPost() {
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
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] =
    React.useState<SelectedImage | null>(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setValue("image.localUri", pickerResult.uri);
  };

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
          {getValues("image.localUri") ? (
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Image
                    source={{ uri: value!.localUri }}
                    style={styles.thumbnail}
                  />
                </>
              )}
              name="image"
            />
          ) : null}

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
          <Text>redux counter is {} </Text>
          <Text>hiiii</Text>
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
});
