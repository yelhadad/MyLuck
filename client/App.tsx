import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png'
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'; 

export default function App() {
  const [selectImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Premission to access camera roll is required!")
    }

    let pickResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickResult);

    if(pickResult.cancelled === true){
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri })

    if (selectImage !== null) {
      return (
        <View style={styles.container}
          <Image
          source={{uri: selectedImage.localUri}}
          style={styles.thumbnail}
          />
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo} />
      <Text style={styles.instructions}
      >To share a photo from your phone with a friend, just press the button below!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={openImagePickerAsync}
      >
      <Text style={styles.buttonText}>Pick up a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  thumbernail: {
    width: 300,
    height: 300
    resizeMode: 'contain'
  }

});
