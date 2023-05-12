import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { View } from "react-native-animatable";
import { auth } from "../../configs/firebase";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
export default function Signup() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+855 95 550 626');
  const [name, setName] = useState('');
  const [confirmCode, setConfirmCode] = useState(null);

  const handleSendCode = async () => {
    try {
      const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
      setConfirmCode(confirmation);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  
  const handlePhoneSubmit = async () => {
    console.log('handlePhoneSubmit', phoneNumber);
    console.log('handlePhoneSubmit', name);
    try {
      const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
      navigation.navigate('Otp', { confirmation });
    } catch (error) {
      console.log('Error sending verification code:', error);
    }
  };

  const handleConfirmCode = async () => {
    try {
      await confirmCode.confirm(code);
      Alert.alert('Success', 'Phone number verified successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="flex-1">
      <View className="flex-1 flex flex-col p-4 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-4 top-8"
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
          Create New Account
        </Text>
        {/* From */}
        <View className="flex flex-col mt-8 ">
          <View className="bg-white rounded-full shadow flex flex-row items-center px-4  border-gray-200 border">
            {/* Country Code */}
            <View className="flex flex-row items-center justify-center gap-2 ">
              <Image
                source={require("../../assets/images/usa.png")}
                style={styles.countryCodeImg}
              />
              {/* Icon dropdown */}
              <Icon.ChevronDown strokeWidth={2} stroke="black" />
            </View>
            {/* Phone number input */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="+000 000 000"
                keyboardType="numeric"
                style={styles.input}
                className="text-gray-800 text-lg font-normal w-full"
                onChangeText={setPhoneNumber}
                value= {phoneNumber}
              />
            </View>
          </View>
          {/* OTP Input with button Verify */}
          <View
            className="bg-white rounded-full shadow flex flex-row items-center px-4 mt-4 border-gray-200 border"
          >
            {/* input otp */}
            <View
              className="flex flex-row items-center justify-center gap-2 "
            >
              <TextInput
                placeholder="OTP 0 0 0 0 0 0"
                keyboardType="numeric"
                style={styles.otpinput}
                className="text-gray-800 text-lg font-normal w-full"

              />
            </View>
            {/* button verify */}
            <View
              className="flex absolute top-0.5 right-0.5 flex-row items-center justify-center  "
            >
              <TouchableOpacity
                onPress={handleSendCode}
                className="bg-white rounded-full py-1.5 px-4 shadow flex flex-row items-center justify-center  border-gray-200 border"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Text className="text-center text-white text-lg font-normal">
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
         

          {/* Name */}
          <View className="bg-white rounded-full shadow flex flex-row items-center px-4 mt-4 border-gray-200 border">
            <Icon.User strokeWidth={2} stroke="gray" />
            <TextInput
              placeholder="Name"
              style={styles.input}
              className="text-gray-800 text-lg font-normal w-full"
              onChangeText={setName}
              value= {name}
            />
          </View>
          <TouchableOpacity
            onPress={
              () => handleConfirmCode()
            }
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Text className="text-center text-white text-lg font-normal">
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col mt-4">
          {/* or */}
          <View className="flex flex-row items-center justify-center mt-4">
            <View className="w-1/4 h-0.5 bg-gray-200"></View>
            <Text className="text-center text-gray-500 text-lg font-normal mx-4">
              or continue with
            </Text>
            <View className="w-1/4 h-0.5 bg-gray-200"></View>
          </View>
            {/* Social media */}
           <View
            className="flex flex-row items-center justify-between px-10 gap-4 mt-4"
           >
            <TouchableOpacity
                onPress={() => navigation.navigate("Otp")}
                className="bg-white rounded-full py-3 flex-1  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                >
                    <Image
                        source={require("../../assets/images/logo_fb.png")}
                        style={styles.countryCodeImg}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Otp")}
                className="bg-white rounded-full py-3  shadow flex flex-1 flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                 
                >
                    <Image
                        source={require("../../assets/images/logo_gl.png")}
                        style={styles.countryCodeImg}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Otp")}
                className="bg-white rounded-full py-3  shadow flex-1 flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
                
                >
                    <Image
                        source={require("../../assets/images/logo_ap.png")}
                        style={styles.countryCodeImg}
                    />
            </TouchableOpacity>
           </View>

          <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-center text-gray-500 text-lg font-normal ">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text
                className="text-center  text-lg font-normal ml-2"
                style={{ color: themeColors.bgColor(1) }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgfluid: {
    resizeMode: "contain",
  },
  otpinput:{
    height: 40,
    margin: 6,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingBottom: 6,
    paddingTop: 12,
    outline: "none",
    borderWidth: 0,

  },
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 8,
    outline: "none",
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
