import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback,Platform } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function ResturantCard({
    id, 
    title,
    imgUrl,
    rating,
    type,
    address, 
    description,
    dishes,
    reviews,
    lng,
    lat,
    delivery,
    distance,
    gridType = 'Column',
}) {
  // console.log(urlFor(imgUrl).url());
  const fallbackImage = require('../assets/images/BG.png');
  const imageStyle = gridType === 'Row' ? { 
    height: 184,
    width: "100%"
   } : { height: 144, width:  256 };
  const navigation = useNavigation();
  const cartClas = gridType === 'Row' ? 'bg-white dark:bg-slate-700 rounded-3xl shadow-lg relative' : 'mr-6 bg-white dark:bg-slate-700 rounded-3xl shadow-lg relative';
  return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate('Resturant', {
        id, 
        title,
        imgUrl,
        rating,
        type,
        address, 
        description,
        dishes,
        lng,
        reviews,
        lat,
        delivery,
        distance,
      })
    }}>
      <View style={{
        shadowColor: Platform.OS === 'ios' ? '#E9E9E9' : themeColors.bgColor(0.2),
        shadowRadius: Platform.OS === 'ios' ? 7 : 5,
        shadowOpacity: Platform.OS === 'ios' ? 0.4 : 0.5,
      }} className={cartClas}>
         {/* status promotion */}
          <View className="absolute top-0 right-0 mt-2 mr-2 z-20">
            <LinearGradient
              colors={["#1BAC4B", "#65C936"]}
              start={[0, 0]}
              end={[1, 0]}
              style={{
                borderRadius: 8,
                padding: 2,
              }}
            >
              <Text className="text-white  font-bold px-2 py-1"
                style={{
                  fontSize: gridType === 'Row' ? 14 : 12,
                }}
              >Promotion</Text>
            </LinearGradient>
          </View>
          <Image  style={imageStyle} className="rounded-t-3xl" source={ imgUrl ? { uri: urlFor(imgUrl).url()} :fallbackImage } />
        <View className="px-3 pb-4 space-y-2 ">
         <View 
          className="flex flex-row  "
         >
          <Text className="font-bold flex-1 pt-2 dark:text-white overflow-ellipsis"
          numberOfLines={1}
          style={{
            fontSize: gridType === 'Row' ? 24 : 18,
          }}
          >{title}</Text>
         </View>
          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text style={{ 
                fontSize: gridType === 'Row' ? 14 : 12,
               }}  >
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700 dark:text-gray-200"> ({reviews} 1.5k)</Text> · <Text className="font-semibold text-gray-700 dark:text-gray-200">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={
                gridType === 'Row' ? 18 : 15
              } height={
                gridType === 'Row' ? 18 : 15
              } />
              <Text className="text-gray-700 dark:text-gray-200"
              style={{
                fontSize: gridType === 'Row' ? 14 : 12,
              }}
              >{address}</Text>
              <Text 
                style={{transform: [{rotate: '0deg'}],
                fontSize: gridType === 'Row' ? 14 : 12,}}
                className="text-gray-700  dark:text-gray-200"

              >
                |
              </Text>
              <Text className="text-gray-700 dark:text-gray-200"
              style={{
                fontSize: gridType === 'Row' ? 14 : 12,
              }}
              >{distance} km</Text>
              <Text
              className="text-gray-700 dark:text-gray-200"
              style={{
                fontSize: gridType === 'Row' ? 14 : 12,
              }}
              >
                |
              </Text>
              <Image source={require('../assets/images/bike.png')} 
              style={{
                height: gridType === 'Row' ? 20 : 16,
                width: gridType === 'Row' ? 20 : 16,
              }}
              />
              <Text className="text-gray-700  dark:text-gray-200"
              style={{
                fontSize: gridType === 'Row' ? 14 : 12,
              }}
              > ${delivery}</Text>
          </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
    
  )
}

