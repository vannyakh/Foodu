import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function Language() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-800">
      {/* top button */}
      <View className="relative py-4 shadow-sm flex items-center flex-row justify-center">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-2"
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl text-black dark:text-white">
            Language
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        {/* Language list */}
        <View className="flex flex-col mt-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-200"
          >
            <View className="flex flex-row items-center">
              <Image
                source={require("../assets/images/cambodia.png")}
                className="h-8 w-8"
              />
              <Text className="text-base font-bold ml-2 dark:text-white">ខ្មែរ</Text>
            </View>
            {/* <View>
              <Icon.CheckCircle
                strokeWidth={2}
                stroke={themeColors.bgColor(1)}
              />
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-200"
          >
            <View className="flex flex-row items-center">
              <Image
                source={require("../assets/images/unitedkingdom.png")}
                className="h-8 w-8"
              />
              <Text className="text-base font-bold ml-2 dark:text-white">English</Text>
            </View>
            {/* <View>
              <Icon.CheckCircle strokeWidth={2} stroke="gray" />
            </View> */}
            <View>
              <Icon.CheckCircle
                strokeWidth={2}
                stroke={themeColors.bgColor(1)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
