import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { View } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
export default function Auths() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="flex-1">
      <View className="flex-1 flex flex-col p-4 ">
        {/* <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-4 top-14"
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity> */}
        <View className="flex flex-row items-center justify-center mt-10">
          <Image
            source={require("../../assets/images/loges.png")}
            className="img-fluid h-60 w-60 ml-10 resize-contain "
            style={styles.imgfluid}
          />
        </View>
        <Text className="text-center text-4xl font-bold text-gray-700">
          Let’s you in
        </Text>
        <View className="flex flex-col mt-4 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border"
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Image
                source={require("../../assets/images/logo_fb.png")}
                className="img-fluid h-6 w-6 mx-auto resize-contain"
              />
              <Text className="text-center text-gray-800 text-lg font-normal">
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Email_signup")}
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mt-4"
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Image
                source={require("../../assets/images/logo_gl.png")}
                className="img-fluid h-6 w-6 mx-auto resize-contain"
              />
              <Text className="text-center text-gray-800 text-lg font-normal">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mt-4"
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Image
                source={require("../../assets/images/logo_ap.png")}
                className="img-fluid h-6 w-6 mx-auto resize-contain"
              />
              <Text className="text-center text-gray-800 text-lg font-normal">
                Continue with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* or */}
        <View className="flex flex-row items-center justify-center mt-4">
          <View className="w-1/4 h-0.5 bg-gray-200"></View>
          <Text className="text-center text-gray-500 text-lg font-normal mx-4">
            or
          </Text>
          <View className="w-1/4 h-0.5 bg-gray-200"></View>
        </View>
        {/* or */}
        <View className="flex flex-col mt-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            className="bg-white rounded-full py-3  shadow flex flex-row items-center justify-center  border-gray-200 border mb-7"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Text className="text-center text-white text-lg font-normal">
                Sign in with Phone Number
              </Text>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row items-center justify-center mt-4">
            <Text
              className="text-center text-gray-500 text-lg font-normal "
            >
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                className="text-center  text-lg font-normal ml-2"
                style={{ color: themeColors.bgColor(1) }}
              >
                Sign up
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
});
