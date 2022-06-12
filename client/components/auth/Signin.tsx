import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  increment,
  decrement,
  selectCount,
} from "../../redux/counter/counterSlice";
import { logOff, signIn } from "../../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  username: string;
  password: string;
};
// this coponent is not in use right now!!!!!
export default function Signin() {
  const count = useSelector((state: RootState) => state.counter.value);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(signIn({ email: "yoave14@gmail.com", isSignIn: true }));
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Signin!</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="username"
                placeholderTextColor={"black"}
              />
            )}
            name="username"
          />
          {errors.username && <Text>This is required.</Text>}

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
                placeholder="passwordb"
                placeholderTextColor={"black"}
              />
            )}
            name="password"
          />

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <Text>redux counter is {count} </Text>
          <Button
            title="Increase counter"
            onPress={() => dispatch(increment())}
          />
          <Button
            title="already have an account? sign up!"
            onPress={() => navigation.navigate("Signup")}
          />
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
});
