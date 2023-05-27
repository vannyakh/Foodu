import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  Share,
} from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Loarding from "../components/Loarding";
export default function InviteFriends() {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Hey, I'm using Food Delivery App. Download it now and get 1000 riel off your first order. https://play.google.com/store/apps/details?id=com.fooddeliveryapp",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          alert("shared with activity type of result.activityType");
        } else {
          // shared
          // alert("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        // alert("dismissed");
      }
    } catch (error) {
      alert(error.message);
    }
  };


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
          Invite Friends
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        <View 
          className="flex-1 flex flex-col p-4 "
        >
          <Image
            source={require("../assets/images/gift.png")}
            style={{
              height: 200,
              width: 200,
              alignSelf: "center",
              marginTop: 50,
            }}
          />
          <Text className="text-center font-medium text-xl text-black dark:text-white">
            Invite Friends, Get $10
          </Text>
          <Text className="text-center font-light text-xl text-black dark:text-white">
          Get $10 in credits when someone sign up using your refer link
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: themeColors.bgColor(1),
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
              onPress={onShare}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  paddingHorizontal: 20,
                }}
              >
                Invite Friends
              </Text>
              </TouchableOpacity>
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}