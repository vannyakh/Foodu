import { View, Text,SafeAreaView,Image,ScrollView,TouchableOpacity,RefreshControl } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import * as Icon from 'react-native-feather'
import ResturantCard from '../components/resturantCard'

export default function ResturantList() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] =useState(false);
  const [resturant, setResturant] = useState({
    _id: "1",
    name: "Pizza Hut",
    rating: 4.5,
    name: "Pizza",
    address: "123 main street",
    description: "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
    dishes: "Foode" ,
    lng: 123,
    lat: 123,
  });
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
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
            Pizza Hut
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <View className="flex flex-col p-4"
        key={item}
        >
          <ResturantCard
          id={resturant._id}
          title={resturant.name}
          rating={resturant.rating}
          address={resturant.address}
          delivery="12"
          distance="1.2"
          description={resturant.description}
          dishes={resturant.dishes}
          lng={resturant.lng}
          lat={resturant.lat}
          gridType='Row'
          />
        </View>))}
      </ScrollView>
    </SafeAreaView>
  )
}