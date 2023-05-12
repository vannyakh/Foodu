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

export default function Discount() {

  const navigation = useNavigation();
  const offlist = [
    {
      id: 1,
      offer:"30% off",
      title: "discount only valid for today!",
      description: "Use code: FIRST10",
      image: require("../assets/images/d2.png"),
      bgColor: "#1BAC4B"
    },
    {
      id: 2,
      offer:"30% off",
      title: "discount only valid for today!",
      description: "Use code: FIRST10",
      image: require("../assets/images/d3.png"),
      bgColor: "#FF4D67"
    },
    {
      id: 3,
      offer:"30% off",
      title: "discount only valid for today!",
      description: "Use code: FIRST10",
      image: require("../assets/images/d4.png"),
      bgColor: "#FB9400"
    },

  ]
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
            Special Offers
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        <View className="flex flex-col mt-2 px-4">
          {offlist.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-6 rounded-3xl  border mb-4 h-40 relative overflow-hidden"
            style={{
              borderColor: item.bgColor,
              backgroundColor: item.bgColor,
              shadowColor: item.bgColor,
              shadowOpacity: 0.2,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 0 },
              elevation: 5,
            }}
          >
            <Image
              source={require("../assets/images/l.png")}
              className=" absolute top-0 -left-6"
              style={{
                opacity: 0.5,
                width: 150,
                height: 150,
              }}
            />
            <Image
              source={require("../assets/images/r.png")}
              className=" absolute -top-10 -right-5"
              style={{
                opacity: 0.5,
                width: 150,
                height: 150,
              }}
            />
            <Image
              source={require("../assets/images/mr.png")}
              className="absolute -top-8 right-32"
              style={{
                opacity: 0.5,
                width: 100,
                height: 100,
              }}
            />

            <View className="flex flex-col items-start w-7/12  ">
              <Text
                style={{
                  fontSize: 38,
                  fontWeight: "bold",
                }}
                className="text-white"
              >
                {item.offer}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
                className="text-white"
              >
                {item.title}
              </Text>
            </View>
            <View className="flex flex-row items-center ">
              <Image
                source={item.image}
                className="h-28 w-28"
              />
            </View>
          </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
