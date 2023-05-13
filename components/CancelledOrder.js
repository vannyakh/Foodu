import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";
import { themeColors } from '../theme';
function Cancelledorder({ name, item, status, distance, id, price, image, statusBackgroundColor }) {
  return (
    <>
      <View className="flex-col flex mx-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-3xl shadow-2xl mb-4">
        <View
          className="flex-row items-center"
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
                style={{ borderColor: "#F75555", borderWidth:1, color: "#F75555" }}
                className="text-sm font-center py-1 px-2 rounded-lg ml-4"
              >
                {status}
              </Text>
            </View>
          </View>
        </View>
        
      </View>
    </>
  )
}

export default Cancelledorder