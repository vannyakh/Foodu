import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/categories";
import FeatureRow from "../components/featuredRow";
import { getFeaturedResturants } from "../api";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { TouchableWithoutFeedback } from "react-native";
import { useColorScheme } from "nativewind";
import Loarding from "../components/Loarding";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading , setLoading] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  
  const Search = () => {
    navigation.navigate("Search"); // Replace "OtherScreen" with the name of the screen you want to navigate to
  };
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    setLoading(true);
    getFeaturedResturants().then((data) => {
      setFeaturedCategories(data);
      setLoading(false);
    });
    
  }, []);
  // refresh data on pull down
  const onRefresh = () => {
    setRefreshing(true);
    getFeaturedResturants().then((data) => {
      setFeaturedCategories(data);
    });
    
    setRefreshing(false);
  };

  const Resturant = () => {
    navigation.navigate("Resturant"); // Replace "OtherScreen" with the name of the screen you want to navigate to
  };
  const Filter = () => {
    navigation.navigate("Filter"); // Replace "OtherScreen" with the name of the screen you want to navigate to
  };
  const Map = () => {
    navigation.navigate("Map"); // Replace "OtherScreen" with the name of the screen you want to navigate to
  };
  // // loading
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);


  return (
    <SafeAreaView className="bg-white dark:bg-slate-800">
      {/* loading */}
      {loading && (
        <View
          style={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <ActivityIndicator size="large" color={themeColors.bgColor(1)} />
          <Text className="text-white mt-2">Loading...</Text> */}
          <Loarding />
        </View>
      )}
      <StatusBar 
        barStyle="white-content" 
        backgroundColor={colorScheme != "dark" ? themeColors.bgColor(1) : "#1F2937"}

        
      />
      {/* Header */}
      <View className="flex justify-between items-center  flex-row px-4 py-3">
        <View className="flex justify-center items-center flex-row">
          <Image
            source={require("../assets/icon.png")}
            className="img-fluid h-12 w-12"
          />
          <Text className="text-xl font-bold ml-2 dark:text-white">Foodu</Text>
        </View>
        <View 
          className="flex flex-row items-center"
        >
          {/* profile */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            className="rounded-full p-1 shadow"
          >
              <Image
                source={require('../assets/images/deliveryGuy.png')}
                style={{
                  height:38,
                  width:38,
                  marginHorizontal:6,
                  borderRadius:8,
                  borderColor: "#EEEEEE",
                  borderWidth:1,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
          >
            {
              colorScheme != "dark" ? (
            <Image
              source={require("../assets/images/notificationhome.png")}
              className="h-10 w-10"
            />
              ) : ( 
            <Image
              source={require("../assets/images/notificationhome_dark.png")}
              className="h-10 w-10"
            />
              )}
          </TouchableOpacity>
        
            </View>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >

        {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-1">
          <View className="flex-row flex-1 items-center px-3 py-2.5 rounded-2xl border border-gray-300">
            <View
              className="flex-1 flex flex-row items-center  text-gray-400 "
            >
              <Icon.Search height="18" width="18" stroke="gray" />
              {/* <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' /> */}
              <TouchableWithoutFeedback
              onPress={Search}
              >
              <Text className="ml-2 flex-1 flex flex-row items-center  text-gray-400  py-px">What are you craving?</Text>
              </TouchableWithoutFeedback>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300"
              onPress={Map}
            >
              <Icon.MapPin height="18" width="18" stroke="gray" />
              <Text className="text-gray-600">Phnom penh,..</Text>
            </TouchableOpacity>
          </View>
          <View>

          {/* <View
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className=" p-2.5 rounded-full"
          >
            <TouchableWithoutFeedback onPress={Filter}>
              <Icon.Sliders
                height={18}
                width={18}
                strokeWidth="2.5"
                stroke="white"
              />
            </TouchableWithoutFeedback>
          </View> */}
          
          </View>
        </View>

        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5 pb-10" >
          {featuredCategories?.map((category) => {
            return (
              <FeatureRow
                key={category._id}
                id={category._id}
                title={category.name}
                resturants={category?.resturants}
                // description={category.description}
                featuredCategory={category._type}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
