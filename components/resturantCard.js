import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
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
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
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
      <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white dark:bg-slate-700 rounded-3xl shadow-lg">
          <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2 dark:text-white">{title}</Text>
          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700 dark:text-gray-200"> ({reviews} 1.5k)</Text> · <Text className="font-semibold text-gray-700 dark:text-gray-200">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs dark:text-gray-200">{address}</Text>
              <Text 
                style={{transform: [{rotate: '0deg'}]}}
                className="text-gray-700 text-xs dark:text-gray-200"
              >
                |
              </Text>
              <Text className="text-gray-700 text-xs dark:text-gray-200">{distance} km</Text>
              <Text
              className="text-gray-700 text-xs dark:text-gray-200"
              >
                |
              </Text>
              <Image source={require('../assets/images/bike.png')} className="h-4 w-4" />
              <Text className="text-gray-700 text-xs dark:text-gray-200"> ${delivery}</Text>
          </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
    
  )
}

