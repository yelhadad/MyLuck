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
import { userType } from "../types/signup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { increment } from "../redux/counter/counterSlice";
//
type FormData = {
  email: string;
  password: string;
  confermPassword: string;
  mobileNumber: string;
  businessNane: string;
  contact: string;
  // שעות פעילות
  // can be date
  activityTime: string;
  // in the future choose from a map or type the adress
  location: string;
  highPrice: string;
  lowPrice: string;
};

export default function CosmeticainSignup() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      confermPassword: "",
      mobileNumber: "",
      businessNane: "",
      contact: "",
      activityTime: "",
      location: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Signup!</Text>
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
              textContentType="emailAddress"
              placeholder="email adrress"
              placeholderTextColor={"black"}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

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
              textContentType="password"
              placeholder="passowrd"
              placeholderTextColor={"black"}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{ maxLength: 100, required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="conferm password"
              placeholderTextColor={"black"}
              secureTextEntry={true}
            />
          )}
          name="confermPassword"
        />
        {errors.confermPassword && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType="telephoneNumber"
              placeholder="mobile number"
              placeholderTextColor={"black"}
              keyboardType="number-pad"
            />
          )}
          name="mobileNumber"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Business Name"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="businessNane"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="contact information"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="contact"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="location"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="location"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Activity Time"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="activityTime"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="High price"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="highPrice"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Low Price"
              placeholderTextColor={"black"}
              keyboardType="default"
            />
          )}
          name="lowPrice"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        <Text>redux counter {counter}</Text>
        <Button
          title="Increase counter"
          onPress={() => dispatch(increment())}
        />
      </View>
    </ScrollView>
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
