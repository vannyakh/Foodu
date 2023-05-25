import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "../slices/basketSlice";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
function CartOrder({ name, item, status, distance, id, price, image, statusBackgroundColor }) {
  return (
    <>
      <View className="flex-col flex mx-4 p-3 bg-gray-100 dark:bg-slate-700 rounded-3xl shadow-2xl mb-4">
        <View
          className="flex-row items-center  mb-3  pb-6  border-gray-300 dark:border-slate-500"
          style={{
            borderBottomWidth: 1,
          }}
        >
         
          
          <Image
            className="rounded-3xl"
            style={{ height: 120, width: 120 }}
            source={image}
          />
          <View className="flex flex-1 space-y-3">
            <View className="pl-3">
              <Text className="text-xl font-bold dark:text-white">{name}</Text>
            </View>
            <View className="flex-row pl-3 items-center">
              <Text className="text-gray-700 text-sm font-normal dark:text-gray-200">
                {item} items
              </Text>
              <Text className="text-gray-700 text-sm font-normal mx-2 dark:text-gray-200">|</Text>
              <Text className="text-gray-700 text-sm font-normal dark:text-gray-200">
                {distance} Km
              </Text>
            </View>
            <View className="flex-row pl-3 items-center">
              <Text className="text-gray-700 text-lg font-bold dark:text-gray-200">${price}</Text>
              <Text
                style={{ backgroundColor: "#1BAC4B", color: "white" }}
                className="text-sm font-center py-1 px-2 rounded-lg ml-4"
              >
                {status}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row flex justify-between items-center  gap-2">
          <TouchableOpacity
            className="flex-row flex-1 w-full  items-center justify-center rounded-3xl py-2 "
            style={{
              borderWidth: 1,
              borderColor: themeColors.bgColor(1),
            }}
          >
            <Text
              className=" text-lg font-medium"
              style={{
                color: themeColors.bgColor(1),
              }}
            >
              Cancel Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row  flex-1 w-full items-center justify-center rounded-3xl py-2 "
            style={{
              backgroundColor: themeColors.bgColor(1),
            }}
          >
            <Text className="text-white text-lg font-medium">Track Driver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CartOrder;
