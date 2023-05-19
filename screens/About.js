import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
} from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import React from "react";

export default function About() {
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
        About
        </Text>
      </View>
    </View>
    <ScrollView className="flex-1"></ScrollView>
  </SafeAreaView>
  )
}