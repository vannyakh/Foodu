import { Text, ImageBackground, TouchableOpacity, Image,StatusBar } from "react-native";
import { View } from "react-native-animatable";
import React, { useEffect } from "react";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
export default function WelcomTo() {
  const navigation = useNavigation();
  // dele screen

  return (
    <View>
       
      <ImageBackground
        source={require("../../assets/images/bg_image.png")}
        style={{ width: "100%", height: "100%" }}
      >
        
        <View
          animation={"fadeInUpBig"}
          duration={800}
          delay={200}
          className="flex flex-col px-4 pb-20 absolute left-0 bottom-0 items-center  "
        >
          <Text
            className="text-center text-4xl font-bold "
            style={{ color: themeColors.bgColor(1) }}
          >
            Welcome to Foodu! 👋
          </Text>
          <Text className="text-center text-gray-50 text-lg font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View
            animation={"fadeInUpBig"}
            duration={800}
            delay={1200}
            className="flex flex-col mt-4 w-full"
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Auth")}
              className=" rounded-full py-3  shadow flex flex-row items-center justify-center "
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Text className="text-center text-gray-50  text-lg font-normal">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
