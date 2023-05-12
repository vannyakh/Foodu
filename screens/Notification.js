import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
  RefreshControl,
} from "react-native";
import Ordersuccess from "../assets/images/Ordersuccess.png";
import Available from "../assets/images/Available.png";
import Cancelled from "../assets/images/Cancelled.png";
import Credit from "../assets/images/Credit.png";
import Profilesetup from "../assets/images/Profilesetup.png";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Notification() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
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
            Notification
          </Text>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      className="flex-1">
        <View className="flex flex-col gap-2 p-4">
          {/* Notify cationt header */}
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              {/* <View className="bg-gray-200 rounded-full p-2">
                <Icon.Bell strokeWidth={2} stroke="black" />
              </View> */}
              <View>
                <Text className="font-bold text-lg dark:text-white">New</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-400 ">Clear All</Text>
            </View>
          </View>

          {/* Notification item */}
          <View className="flex flex-row justify-between items-center rounded-lg p-4"
          style={{backgroundColor: themeColors.bgColor(0.09)}}
          >
            <View className="flex flex-row items-center gap-2">
              <View
                className=" rounded-full p-2"
                style={{ backgroundColor: themeColors.bgColor(0.1) }}
              >
                <Image
                  source={Ordersuccess}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View>
                <Text className="font-bold text-base dark:text-white">
                  Your order has been placed successfully
                </Text>
                <View 
                  className="flex flex-row gap-2 items-center"
                >
                  <Text
                    className="text-gray-400"
                  >19 Dec, 2022</Text>
                  <Text
                    className="text-gray-400"
                  >|</Text>
                  <Text
                    className="text-gray-400"
                  >12:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center rounded-lg p-4"
          style={{backgroundColor: `rgba(255, 152, 0, 0.09)`}}
          >
            <View className="flex flex-row items-center gap-2">
              <View
                className=" rounded-full p-2"
                style={{ backgroundColor: `rgba(255, 152, 0, 0.1)` }}
              >
                <Image
                  source={Available}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View>
                <Text className="font-bold text-base dark:text-white">
                  New Services Available!
                </Text>
                <View 
                  className="flex flex-row gap-2 items-center"
                >
                  <Text
                    className="text-gray-400"
                  >19 Dec, 2022</Text>
                  <Text
                    className="text-gray-400"
                  >|</Text>
                  <Text
                    className="text-gray-400"
                  >12:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center rounded-lg p-4"
          style={{backgroundColor: `rgba(247, 85, 85, 0.09)`}}
          >
            <View className="flex flex-row items-center gap-2">
              <View
                className=" rounded-full p-2"
                style={{ backgroundColor: `rgba(247, 85, 85, 0.1)` }}
              >
                <Image
                  source={Cancelled}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View>
                <Text className="font-bold text-base dark:text-white">
                  Orders Cancelled!
                </Text>
                <View 
                  className="flex flex-row gap-2 items-center"
                >
                  <Text
                    className="text-gray-400"
                  >19 Dec, 2022</Text>
                  <Text
                    className="text-gray-400"
                  >|</Text>
                  <Text
                    className="text-gray-400"
                  >12:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Notify cationt header */}
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              {/* <View className="bg-gray-200 rounded-full p-2">
                <Icon.Bell strokeWidth={2} stroke="black" />
              </View> */}
              <View>
                <Text className="font-bold text-lg dark:text-white">Seen</Text>
              </View>
            </View>
            <View>
              {/* <Text className="text-gray-400">Clear All</Text> */}
            </View>
          </View>
          <View className="flex flex-row justify-between items-center rounded-lg p-4"
          style={{backgroundColor: `rgba(36, 107, 253, 0.09)`}}
          >
            <View className="flex flex-row items-center gap-2">
              <View
                className=" rounded-full p-2"
                style={{ backgroundColor: `rgba(36, 107, 253, 0.1)` }}
              >
                <Image
                  source={Credit}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View>
                <Text className="font-bold text-base dark:text-white">
                Credit Card Connected!
                </Text>
                <View 
                  className="flex flex-row gap-2 items-center"
                >
                  <Text
                    className="text-gray-400"
                  >19 Dec, 2022</Text>
                  <Text
                    className="text-gray-400"
                  >|</Text>
                  <Text
                    className="text-gray-400"
                  >12:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center rounded-lg p-4"
          style={{backgroundColor: `rgba(27, 172, 75, 0.09)`}}
          >
            <View className="flex flex-row items-center gap-2">
              <View
                className=" rounded-full p-2"
                style={{ backgroundColor: `rgba(27, 172, 75, 0.1)` }}
              >
                <Image
                  source={Profilesetup}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View>
                <Text className="font-bold text-base dark:text-white">
                Credit Card Connected!
                </Text>
                <View 
                  className="flex flex-row gap-2 items-center"
                >
                  <Text
                    className="text-gray-400"
                  >19 Dec, 2022</Text>
                  <Text
                    className="text-gray-400"
                  >|</Text>
                  <Text
                    className="text-gray-400"
                  >12:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
