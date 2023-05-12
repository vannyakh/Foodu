import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { View } from "react-native-animatable";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
import { auth } from "../../configs/firebase";
export default function OTP() {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState(null);
  // const { phoneNumber } = route.params;
  // const { confirmation } = route.params;
  const [confirm, setConfirm] = useState(null);
  const [timer, setTimer] = useState(30);
  const [showTimer, setShowTimer] = useState(true);

  
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  // setVerificationCode(pin1 + pin2 + pin3 + pin4);
  // useEffect setVerificationCode
 

  const handlePinChange = (text, inputRef) => {
    // Update the state based on which input field is being changed
    switch (inputRef) {
      case input1Ref:
        setPin1(text);
        if (text !== "") {
          input2Ref.current.focus(); // Auto-focus on the next input field
        }
        break;
      case input2Ref:
        setPin2(text);
        if (text !== "") {
          input3Ref.current.focus(); // Auto-focus on the next input field
        } else {
          input1Ref.current.focus(); // Auto-focus on the previous input field
        }
        break;
      case input3Ref:
        setPin3(text);
        if (text !== "") {
          input4Ref.current.focus(); // Auto-focus on the next input field
        } else {
          input2Ref.current.focus(); // Auto-focus on the previous input field
        }
        break;
      case input4Ref:
        setPin4(text);
        if (text === "") {
          input3Ref.current.focus(); // Auto-focus on the previous input field
        }
        break;
      default:
        break;
    }
  };

  const handleVerification = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        confirmation.verificationId,
        verificationCode
      );
      await auth.signInWithCredential(credential);
      navigation.navigate("Home");
    } catch (err) {
      setVerificationError(err.message);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 flex flex-col p-4 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-4 top-8"
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center mt-4">
          <Text className="text-center text-xl font-bold text-gray-700">
            OTP Code Verification
          </Text>
        </View>

        <Text className="text-center text-lg font-medium text-gray-600 mt-24">
          Code has been send to {"\n"} +000 000 000
        </Text>
        {/* OTP From */}
        <View className="flex flex-row items-center justify-center mt-10">
          <View className="flex flex-row items-center justify-center gap-4">
            <TextInput
              style={styles.input}
              placeholder="0"
              maxLength={1}
              keyboardType="numeric"
              className="text-gray-800 text-lg font-normal w-full"
              ref={input1Ref}
              value={pin1}
              onChangeText={(text) => handlePinChange(text, input1Ref)}
            />
            <TextInput
              style={styles.input}
              placeholder="0"
              maxLength={1}
              keyboardType="numeric"
              className="text-gray-800 text-lg font-normal w-full"
              ref={input2Ref}
              value={pin2}
              onChangeText={(text) => handlePinChange(text, input2Ref)}
            />
            <TextInput
              style={styles.input}
              placeholder="0"
              maxLength={1}
              keyboardType="numeric"
              className="text-gray-800 text-lg font-normal w-full"
              ref={input3Ref}
              value={pin3}
              onChangeText={(text) => handlePinChange(text, input3Ref)}
            />
            <TextInput
              style={styles.input}
              placeholder="0"
              maxLength={1}
              keyboardType="numeric"
              className="text-gray-800 text-lg font-normal w-full"
              ref={input4Ref}
              value={pin4}
              onChangeText={(text) => handlePinChange(text, input4Ref)}
            />
          </View>
        </View>

        <View>
          <Text className="text-center text-lg font-medium text-gray-600 mt-14">
            Didn't receive the code?{" "}
            <Text style={{ color: themeColors.bgColor(1) }}>Resend</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={
            () => navigation.navigate("Home")
          }
          className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7 mt-8"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <View className="flex flex-row items-center justify-center gap-4">
            <Text className="text-center text-white text-lg font-normal">
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgfluid: {
    resizeMode: "contain",
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
  input: {
    height: 50,
    width: 50,
    borderColor: themeColors.bgColor(1),
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: themeColors.bgColor(1),
  },
});
