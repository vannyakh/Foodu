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

export default function Address() {
  const navigation = useNavigation();
  const address = [
    {
      id: 1,
      name: "ផ្ទះ",
      address:
        "ផ្ទះលេខ ១២៣ ផ្លូវលេខ ៤ សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ",
    },
    {
      id: 2,
      name: "សាលារៀន",
      address:
        "ផ្ទះលេខ ១២៣ ផ្លូវលេខ ៤ សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ",
    },
    {
      id: 3,
      name: "កន្លែងធ្វើការ",
      address:
        "ផ្ទះលេខ ១២៣ ផ្លូវលេខ ៤ សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ",
    },
  ];
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
            Address
          </Text>
        </View>
      </View>
      <ScrollView>
        {/* address */}
        <View className="flex flex-col w-full py-4 px-4 justify-start items-start">
         {/* map address */}
         {address.map((item ,index ) => (
          
          <View className="flex flex-row justify-between w-full items-center bg-gray-100 dark:bg-slate-600 px-4 py-3 rounded-lg mb-4">
            <View className="flex flex-row justify-start items-center" 
            style={{width: "80%"}}
            key={index}
            >
              <Image
                source={require("../assets/images/Locationadd.png")}
                style={{ width: 40, height: 40 }}
              />
              <View
                className="flex flex-col justify-start items-start"
                style={{ marginLeft: 2 }}
              >
                <Text className="text-black dark:text-white font-bold text-lg">
                  {item.name}
                </Text>
                <Text
                  className="text-center font-normal text-sm text-gray-600 dark:text-slate-200 overflow-ellipsis"
                  numberOfLines={1}
                >
                  {item.address}
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center gap-2">
              <TouchableOpacity>
                <Icon.Edit
                  strokeWidth={2}
                  stroke={themeColors.bgColor(1)}
                  onPress={() => navigation.navigate("EditAddress")}
                  width={18}
                  height={18}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon.Trash
                  strokeWidth={2}
                  stroke="red"
                  width={18}
                  height={18}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        </View>
      </ScrollView>
      {/* footer button add New address */}
      <View className="flex flex-row justify-center items-center bg-white dark:bg-slate-800 py-4 px-4 border-t border-gray-100 dark:border-gray-600">
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            width: "90%",
            height: 50,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("AddAddress")}
          className="flex flex-row justify-center items-center"
        >
          <View className="flex flex-row justify-center items-center">
            <Icon.PlusCircle
              strokeWidth={2}
              stroke="white"
              width={18}
              height={18}
            />
            <Text
              className="text-center font-bold text-white text-lg "
              style={{ marginLeft: 10 }}
            >
              Add New Address
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
