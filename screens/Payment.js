import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function Payment() {
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
            Payment Methods
          </Text>
        </View>
      </View>
      {/* show payment mod support creditcard aba wing ac */}

      <ScrollView className="flex-1">
        {/* Payment Methods  */}
        {/* paypal */}
        <View className="flex flex-col mt-2 px-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-6 rounded-xl  border mb-4 "
            style={{
              borderColor: themeColors.bgColor(1),
            }}
          >
            <View className="flex flex-row items-center">
              <Image
                source={require("../assets/images/paypal.png")}
                className="h-8 w-8"
              />
              <Text className="text-base font-bold ml-2 dark:text-white">PayPal</Text>
            </View>
            <View>
              <Text
                style={{
                  color: themeColors.bgColor(1),
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Connected
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-6 rounded-xl  border mb-4 "
            style={{
              borderColor: themeColors.bgColor(1),
            }}
          >
            <View className="flex flex-row items-center">
              <Image
                source={require("../assets/images/Mastercard.png")}
                className="h-8 w-8"
              />
              <Text className="text-base font-bold ml-2 dark:text-white">•••• •••• •••• •••• 4679</Text>
              </View>
              <View>
              <Text
                style={{
                  color: themeColors.bgColor(1),
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Connected
              </Text>
              </View>
          </TouchableOpacity>
          {/* ABA */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex flex-row justify-between items-center px-4 py-6 rounded-xl  border mb-4 "
            style={{
              borderColor: themeColors.bgColor(1),
            }}
          >
            <View className="flex flex-row items-center">
              <Image
                source={require("../assets/images/aba.png")}
                className="h-8 w-8"
              />
              <Text className="text-base font-bold ml-2 dark:text-white">ABA</Text>
              <Text className="text-base font-bold dark:text-white
                ml-1">•�
              </Text>
              </View>
              <View>
              <Text
                style={{
                  color: themeColors.bgColor(1),
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Connected
              </Text>
              </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
      {/* add new payment method */}
      <View className="flex flex-row justify-center items-center bg-white py-4 px-4 border-t dark:bg-slate-800 border-gray-100 dark:border-gray-700" >
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
              className="text-center font-bold text-white text-lg"
              style={{ marginLeft: 10 }}
            >
              Add New Card
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
