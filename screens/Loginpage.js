import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../components/firebase";
import { storeData } from "../utils/storage";
import { designs } from "../components/styles";
import Dialog from "react-native-dialog";
const validator = require("validator");
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
// import { firebase } from "@react-native-firebase/installations";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   for handling dialog visibility and input
  const [dialogInputEmail, setDialogInputEmail] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Reports");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("Reports");
      })
      .catch((error) => alert(error.message));
  };

  //show hide dialog
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = () => {
    setVisible(false);
    console.log(dialogInputEmail);
    const isValidEmail = validator.isEmail(dialogInputEmail);
    if (isValidEmail) {
      proceedWithForgotPasswordRequest(dialogInputEmail);
    } else {
      alert("Not a valid email!");
    }
  };

  const proceedWithForgotPasswordRequest = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(function (user) {
        alert(
          "A link with reset password instructions has been sent to your email."
        );
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <View style={designs.container}>
      <StatusBar style="dark" />
      <View style={designs.inputView}>
        <TextInput
          style={designs.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            setEmail(email);
            storeData("email", email);
          }}
        />
      </View>
      <View style={designs.inputView}>
        <TextInput
          style={designs.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* forgot password button */}
      <TouchableOpacity onPress={showDialog}>
        <Text style={designs.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={designs.loginBtn} onPress={handleLogin}>
        <Text style={designs.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* dialog */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Forgot Password</Dialog.Title>
        <Dialog.Description>
          Please enter your email to send a reset password link.
        </Dialog.Description>
        <Dialog.Input
          label="Email"
          onChangeText={(email) => setDialogInputEmail(email)}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="SUBMIT" onPress={handleSubmit} />
      </Dialog.Container>
    </View>
  );
}
