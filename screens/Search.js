import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useColorScheme } from "nativewind";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { selectResturant } from "../slices/resturantSlice";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";


function Search() {
  const navigation = useNavigation();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className=" bg-white flex-1 dark:bg-slate-800">
      {/* top button */}
      {/* <View className="relative py-4 shadow-sm">
      <TouchableOpacity 
          style={{backgroundColor: themeColors.bgColor(1)}} 
          onPress={navigation.goBack} 
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
      </TouchableOpacity>
      <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{resturant.title}</Text>
      </View>
      
    </View> */}

      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className=" rounded-full p-1 shadow "
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity>
        <View className="flex-row flex-1 items-center px-3 py-2 rounded-full border border-gray-300">
          <View className="flex-1 flex flex-row items-center  text-gray-400 ">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput
              placeholder="Resturants"
              className="ml-2 flex-1 "
              keyboardType="default"
              placeholderTextColor={
                colorScheme === "dark" ? "#979797" : "#6D6D6D"
              }
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: themeColors.bgColor(1),
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>
              <Icon.Sliders strokeWidth={2} stroke="gray" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white dark:bg-slate-800 pt-5"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View className="px-4 flex flex-col gap-4">
          <View className="flex flex-col">
            <Text className="text-gray-800 dark:text-white text-lg font-medium mb-2">
              Recent Searches
            </Text>
            <View style={styles.chipsContainer}>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Burger King</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Salad</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Vegetarian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Dessert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Pancakes</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-gray-800 dark:text-white text-lg font-medium mb-2">
            Popular Cuisines
            </Text>
            <View style={styles.chipsContainer}>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Snack</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Fast Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Beverages</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Chicken</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Noodles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Rice</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Seafood</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>International</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-gray-800  dark:text-white text-lg font-medium mb-2">
            All Cuisines
            </Text>
            <View style={styles.chipsContainer}>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Bakery & Cake</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Dessert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chips}>
                <Text style={styles.chipsText}>Pizza</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;

// const styles = StyleSheet.create({
//   chips : {
//     borderColor: themeColors.bgColor(1),
//     display: 'flex',
//     borderWidth: 1,
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chipsText : {
//     color: themeColors.bgColor(1),
//     fontWeight: 'medium',
//     fontSize: 14,
//     textTransform: 'capitalize',
//   }
// })

const styles = StyleSheet.create({
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  chips: {
    borderColor: themeColors.bgColor(1),
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  chipsText: {
    color: themeColors.bgColor(1),
    fontWeight: "medium",
    fontSize: 14,
    textTransform: "capitalize",
  },
});
