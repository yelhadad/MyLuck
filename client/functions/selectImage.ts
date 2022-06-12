/* the function asks from the user to pick up image
if the user decline the function retrun alert to the user
if the user accepts, the function return the image uri */

import * as ImagePicker from "expo-image-picker";

const openImagePickerAsync = async () => {
  let premissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (premissionResult.granted === false) {
    alert("Premission to access camera roll is required");
    return;
  }

  let pickerResualt = await ImagePicker.launchImageLibraryAsync();

  if (pickerResualt.cancelled === true) {
    return;
  }

  return pickerResualt.uri;
};
