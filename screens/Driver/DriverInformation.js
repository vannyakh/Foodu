import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

const DriverInformation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-800">
      <StatusBar
        barStyle="dark-content"
        backgroundColor={themeColors.bgColor(1)}
      />
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
            Driver Information
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        <View className="flex flex-col items-center justify-center px-4">
          <View className="flex flex-col items-center justify-center p-4">
            <Image
              source={require("../../assets/images/deliveryGuy.png")}
              style={{ width: 120, height: 120 }}
              className="rounded-full"
            />
            <Text className="text-center font-bold text-xl mt-2 text-black dark:text-white">
              Driver Name
            </Text>
            <View className="flex flex-row items-center justify-center mt-1">
              <Text
                className="text-center font-normal text-[18px] text-gray-600 dark:text-white"
              >+1 000 000 00</Text>
              {/* copy phone */}
              <TouchableOpacity
                onPress={() => {}}
                className="rounded-full p-1 shadow ml-2"
              >
                <Icon.Copy strokeWidth={2} stroke={themeColors.bgColor(1)} width={16} height={16}   />
              </TouchableOpacity>
            </View>
          </View>
          <View 
            className="flex flex-row items-center justify-center  py-4 bg-white dark:bg-slate-800 w-full rounded-xl shadow mb-4 "
            style={{
              elevation: 2,
              shadowColor: "#616161",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.01,
            
            }}
          >
            <View 
              className="flex flex-col items-center justify-center"
            >
              <View
                className="flex flex-row items-center justify-center rounded-full p-4 shadow"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Image source={require("../../assets/images/Star_i.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text
                className="text-center font-bold text-xl mt-2 text-black dark:text-white"
              >
                4.7
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                Rating
              </Text>
            </View>
            <View 
              className="flex flex-col items-center justify-center mx-10"
            >
              <View
                className="flex flex-row items-center justify-center rounded-full p-4 shadow"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Image source={require("../../assets/images/Bag_i.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text
                className="text-center font-bold text-xl mt-2 text-black dark:text-white"
              >
                425
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                Order
              </Text>
            </View>
            <View 
              className="flex flex-col items-center justify-center"
            >
              <View
                className="flex flex-row items-center justify-center rounded-full p-4 shadow"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Image source={require("../../assets/images/Time_i.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text
                className="text-center font-bold text-xl mt-2 text-black dark:text-white"
              >
                4
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                Years
              </Text>
            </View>
          </View>

          <View 
            className="flex flex-col items-center justify-center px-6 py-4 bg-white dark:bg-slate-800 w-full rounded-xl shadow mb-4 "
            style={{
              elevation: 2,
              shadowColor: "#616161",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.01,
            
            }}
          >
            <View 
              className="flex flex-row w-full items-center justify-between"
            >
              <Text
                className="text-center font-medium text-lg mt-2 text-black dark:text-white"
              >
                Member Since
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                July 15, 2019
              </Text>
            </View>
            <View
              className="flex flex-row w-full items-center justify-between mt-2"
            >
              <Text
                className="text-center font-medium text-lg  text-black dark:text-white"
              >
                Motorcycle Model
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                Yamaha MX King
              </Text>
            </View>
            <View
              className="flex flex-row w-full items-center justify-between mt-2"
            >
              <Text
                className="text-center font-medium text-lg  text-black dark:text-white"
              >
                Plate Number
              </Text>
              <Text
                className="text-center font-normal text-[14px] text-gray-600 dark:text-white"
              >
                B 1234 ABC
              </Text>
              </View>

          </View>
        </View>
      </ScrollView>
      <View
          className="flex-row flex justify-center items-center   py-5 border-t border-gray-200 dark:border-slate-700 "
        >
          <TouchableOpacity
            className="flex-col flex  items-center"
          >
            <View
              className="flex-row flex justify-center items-center bg-[#46db78]  p-2 rounded-full"
            >
            <Image 
              source={require("../../assets/images/Call.png")}
              className="w-10 h-10 rounded-full"
            />
            </View>
            <Text>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col flex  items-center mx-7"
          >
            <View
              className="flex-row flex justify-center items-center bg-[#3cb2d6]  p-2 rounded-full"
            >
            <Image 
              source={require("../../assets/images/Chat.png")}
              className="w-10 h-10 rounded-full"
            />
            </View>
            <Text>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>navigation.navigate("Cancelledorder")}
            className="flex-col flex  items-center"
          >
            <View
              className="flex-row flex justify-center items-center bg-[#dc2626]  p-2 rounded-full"
            >
            <Image 
              source={require("../../assets/images/cancell.png")}
              className="w-10 h-10 rounded-full"
            />
            </View>
            <Text>Cancel</Text>
          </TouchableOpacity>
           
        </View>
    </SafeAreaView>
  );
};

export default DriverInformation;

const styles = StyleSheet.create({});
