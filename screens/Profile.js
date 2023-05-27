import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import ArrowRight from "../assets/images/ArrowRight.png";
import ArrowRight_dark from "../assets/images/ArrowRight_dark.png";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
function Profile() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // signOut(auth)
  
  return (
    <SafeAreaView className=" bg-white flex-1 dark:bg-slate-800">
      <View className="flex justify-between items-center flex-row px-4 py-3">
        <View className="flex justify-center items-center flex-row">
          <Image
            source={require("../assets/icon.png")}
            className="img-fluid h-12 w-12"
          />
          <Text className="text-xl font-bold ml-2 dark:text-white">
            Profile
          </Text>
        </View>
        <View>
          <TouchableOpacity
          // onPress={() => navigation.navigate("Search")}
          >
            {colorScheme != "dark" ? (
              <Image
                source={require("../assets/images/MoreCircle.png")}
                className="h-7 w-7"
              />
            ) : (
              <Image
                source={require("../assets/images/MoreCircle_dark.png")}
                className="h-7 w-7"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View className="flex flex-col mx-4">
          {/* Profile menu */}
          <View className="flex flex-row items-center ">
            <TouchableOpacity
              onPress={() => navigation.navigate("Myprofile")}
              className="flex flex-row items-center"
            >
              <Image
                source={require("../assets/images/deliveryGuy.png")}
                className="h-24 w-24 rounded-full "
              />
            </TouchableOpacity>
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Van Soriya
              </Text>
              <Text className="text-sm mb-1 text-gray-500 font-normal dark:text-white">
                +1 111 467 378 399
              </Text>
            </View>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("Myprofile")}
              className=" absolute right-0 "
            >
              <Image
                source={require("../assets/images/Edit.png")}
                className="h-6 w-6 "
              />
            </TouchableOpacity> */}
          </View>
          {/* menu wrapper */}
          <View
            className="flex flex-col mt-4 py-4"
            style={{
              borderTopWidth: 1,
              borderTopColor: "#E2E2E2",
            }}
          >
            {/* menu items */}
            <View className="flex flex-col gap-1">
              <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                      <Image
                        source={require("../assets/images/Discount.png")}
                        className="h-7 w-7"
                      />
                    ) : (
                      <Image
                        source={require("../assets/images/Discount_dark.png")}
                        className="h-7 w-7"
                      />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Special Offers & Promo
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Address")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                      <Image
                        source={require("../assets/images/Location.png")}
                        className="h-7 w-7"
                      />
                    ) : (
                      <Image
                        source={require("../assets/images/Location_dark.png")}
                        className="h-7 w-7"
                      />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Address
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {
                      colorScheme != "dark" ? (
                        <Image
                          source={require("../assets/images/Wallet.png")}
                          className="h-7 w-7"
                        />) : (
                          <Image source={require("../assets/images/Wallet_dark.png")} className="h-7 w-7" />
                        )}
                    
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Payment
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                    <Image
                      source={require("../assets/images/Notification.png")}
                      className="h-7 w-7"
                    />) : (
                      <Image source={require("../assets/images/Notification_dark.png")} className="h-7 w-7" />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Notification
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Friend")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                    <Image
                      source={require("../assets/images/Friends.png")}
                      className="h-7 w-7"
                    />) : (
                      <Image source={require("../assets/images/Friends_dark.png")} className="h-7 w-7" />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Invite Friends
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                    <Image
                      source={require("../assets/images/Info.png")}
                      className="h-7 w-7"
                    />) : (
                      <Image source={require("../assets/images/Info_dark.png")} className="h-7 w-7" />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      About Us & Policy
                    </Text>
                  </View>
                  {colorScheme != "dark" ? (
                    <Image source={ArrowRight} className="h-5 w-5" />
                  ) : (
                    <Image source={ArrowRight_dark} className="h-5 w-5" />
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Language")}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                    <Image
                      source={require("../assets/images/lang.png")}
                      className="h-7 w-7"
                    />) : (
                      <Image source={require("../assets/images/lang_dark.png")} className="h-7 w-7" />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Language
                    </Text>
                  </View>
                  <View className="flex flex-row items-center">
                    <Text className="text-lg font-normal ml-2 mr-2 text-gray-400 dark:text-white">
                      English
                    </Text>
                    {colorScheme != "dark" ? (
                      <Image source={ArrowRight} className="h-5 w-5" />
                    ) : (
                      <Image source={ArrowRight_dark} className="h-5 w-5" />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
              <View onPress={toggleSwitch}>
                <View className="flex flex-row items-center h-11 justify-between mb-2">
                  <View className="flex flex-row items-center">
                    {colorScheme != "dark" ? (
                    <Image
                      source={require("../assets/images/Show.png")}
                      className="h-7 w-7"
                    />) : (
                      <Image source={require("../assets/images/Show_dark.png")} className="h-7 w-7" />
                    )}
                    <Text className="text-lg font-medium text-gray-900 ml-2 dark:text-white">
                      Dark Mode
                    </Text>
                  </View>
                  <Switch
                    value={colorScheme === "dark"}
                    onValueChange={toggleColorScheme}
                    style={{
                      marginRight: 10,
                    }}
                  ></Switch>
                </View>
              </View>
              <TouchableOpacity onPress={() => supabase.auth.signOut()}>
                <View className="flex flex-row items-center h-11 justify-center  my-4">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require("../assets/images/Logout.png")}
                      className="h-7 w-7"
                    />
                    <Text className="text-lg font-medium text-red-400 ml-2">
                      Logout
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
