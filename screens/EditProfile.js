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
  import Profilesetup from "../assets/images/deliveryGuy.png";
  import { themeColors } from "../theme";
  import * as Icon from "react-native-feather";
  import { useNavigation } from "@react-navigation/native";
  import React from "react";
const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = React.useState("Vann Ya");
    const [email, setEmail] = React.useState("vannya@foodu.com");
    const [phone, setPhone] = React.useState("+00 00 000 000");
    const [gender, setGender] = React.useState("Male");
    const [country, setCountry] = React.useState("Cambodia");
    const [birthday, setBirthday] = React.useState("00/00/0000");
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
            <Text className="text-center font-bold text-xl text-black dark:text-white" >
             Edit Profile
            </Text>
          </View>
          {/* save */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Myprofile")}
                className="absolute z-10 flex flex-row p-1  items-center justify-end   right-4"
            >
                <Text 
                    style={{color: themeColors.bgColor(1)}}
                    className="text-center font-medium text-lg mr-2"
                >
                    Save
                </Text>
                {/* <Icon.Save strokeWidth={2} width={20} height={20} stroke={themeColors.bgColor(1)} /> */}
            </TouchableOpacity>

  
        </View>
        <ScrollView className="flex-1">
          <View className="flex flex-col gap-2 p-4">
            {/* iamge profile */}
            <View className="flex flex-row justify-center items-center">
              <View className="relative  ">
                <Image
                  source={Profilesetup}
                  style={{
                    width: 100,
                    height: 100,
                    borderColor: themeColors.bgColor(1),
                    borderWidth: 3,
                  }}
                  className="rounded-full"
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 0,
                    backgroundColor: themeColors.bgColor(1),
                    padding: 4,
                    borderRadius: 50,
                  }}
                >
                  <Icon.Camera
                    strokeWidth={2}
                    width={16}
                    height={16}
                    stroke="white"
                  />
                </View>
              </View>
            </View>
            {/* name */}
            <View className="flex flex-row justify-center items-center">
              <Text className="text-center font-normal text-xl text-gray-700 dark:text-gray-200">
                Van Soriya
              </Text>
            </View>
            {/* File  */}
            <View className="flex flex-col py-4">
              <View className="flex flex-row justify-between items-center mb-6">
                <Text className="text-gray-600 font-medium dark:text-gray-200">Email</Text>
                <Text className="text-gray-500 font-normal dark:text-gray-300">{email}</Text>
              </View>
              <View className="flex flex-row justify-between items-center mb-6">
                <Text className="text-gray-600 font-medium dark:text-gray-200">Phone</Text>
                <Text className="text-gray-500 font-normal dark:text-gray-300">{phone}</Text>
              </View>
              <View className="flex flex-row justify-between items-center mb-6">
                <Text
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-600 font-medium dark:text-gray-200"
                >
                  Birthday
                </Text>
                <Text className="text-gray-500 font-normal dark:text-gray-300">{birthday}</Text>
              </View>
              <View className="flex flex-row justify-between items-center mb-6">
                <Text
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-600 font-medium dark:text-gray-200"
                >
                  gender
                </Text>
                <Text
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-500 font-normal dark:text-gray-300"
                >
                  {gender}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center mb-6">
                <Text
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-600 font-medium dark:text-gray-200"
                >
                  Country
                </Text>
                <Text
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-500 font-normal dark:text-gray-300"
                >
                  {country}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
export default EditProfile

