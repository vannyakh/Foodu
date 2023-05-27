import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { View } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
import { Alert } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

export default function Email_login() {
  const navigation = useNavigation();

  //   hide password and show password
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const handleHidePassword2 = () => {
    setHidePassword2(!hidePassword2);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 flex flex-col p-4 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-4 top-14"
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center mt-20">
          <Image
            source={require("../../assets/images/Logo_Fd.png")}
            className="img-fluid h-40 w-40  resize-contain "
            style={styles.imgfluid}
          />
        </View>
        <Text className="text-center text-2xl font-bold text-gray-700">
          Login Account
        </Text>
        {/* From */}
        <View className="flex flex-col mt-8 ">
          {/* email */}
          <View className="bg-white rounded-full shadow flex flex-row items-center px-4 mt-4 border-gray-200 border">
            <Icon.Mail strokeWidth={2} stroke="gray" />
            <TextInput
              placeholder="Email"
              style={styles.input}
              className="text-gray-800 text-lg font-normal w-full"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </View>

          {/* password */}
          <View className="bg-white rounded-full shadow flex flex-row items-center px-4 mt-4 border-gray-200 border">
            <Icon.Lock strokeWidth={2} stroke="gray" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              className="text-gray-800 text-lg font-normal w-full"
              secureTextEntry={hidePassword}
              value={password}
              onChange={(value) => setPassword(value)}
            />
            {/* icon hide and show password */}
            <View className="absolute right-4">
              <TouchableOpacity onPress={handleHidePassword}>
                {hidePassword ? (
                  <Icon.EyeOff strokeWidth={2} stroke="gray" />
                ) : (
                  <Icon.Eye strokeWidth={2} stroke="gray" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Text className="text-center text-white text-lg font-normal">
                Log In
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col mt-4">
          {/* or */}
          {error !== "" && (
            <Text className="text-center text-red-500 text-lg font-normal ">
              {error}
            </Text>
          )}
          <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-center text-gray-500 text-lg font-normal ">
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Email_signup")}
            >
              <Text
                className="text-center  text-lg font-normal ml-2"
                style={{ color: themeColors.bgColor(1) }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgfluid: {
    resizeMode: "contain",
  },
  otpinput: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingBottom: 6,
    paddingTop: 12,
    borderWidth: 0,
  },
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 8,
    borderWidth: 0,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  countryCodeImg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
