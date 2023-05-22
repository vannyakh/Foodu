import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../slices/resturantSlice";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { AntDesign } from "@expo/vector-icons";
import { emptyBasket } from "../slices/basketSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(emptyBasket());
    navigation.navigate("HomeScreen");
  };
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lng,
          latitudeDelta: 0.1722,
          longitudeDelta: 0.1221,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: resturant.lat,
            longitude: resturant.lng,
          }}
          title={resturant.title}
          description={resturant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white relative">
        {/* <TouchableOpacity className="absolute right-4 top-2">
          
          </TouchableOpacity>
          <View className="flex-row justify-between px-5 pt-10">
              <View>
                  <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                  <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                  <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way</Text>
              </View>
              <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')} />
          </View>
          
        <View 
          style={{backgroundColor: themeColors.bgColor(0.8)}} 
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="p-1 rounded-full">
              <Image style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
            </View>
            
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">Soriya Van</Text>
                <Text className="text-white font-semibold">Your Rider</Text>
            </View>
            <View  className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="1" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleCancel} className="bg-white p-2 rounded-full">
              <AntDesign name="message1" size={24} color={themeColors.bgColor(1)} />
              </TouchableOpacity>
              
            </View>
            
        </View> */}
        <View 
          className="mt-4 pt-2 pb-5 mx-4 border-b border-[#e7e7e7] flex overflow-ellipsis"
        >
          <Text className="text-center font-bold text-xl"
          numberOfLines={1}
          >Checkout Orders</Text>
        </View>
        <View
        className="flex-row flex justify-between items-center mx-4  py-5 border-b border-[#e7e7e7]"
        >
          <View
            className="flex-row flex justify-between items-center"
          >
            <Image
              source={require("../assets/images/deliveryGuy.png")}
              className="w-16 h-16 rounded-full"
            />
            <View
              className="flex flex-col justify-start ml-4"
            >
              <Text className=" font-bold text-xl">Soriya Van</Text>
              <Text className=" font-semibold">Your Rider</Text>
            </View>
          </View>

        <View 
          className="flex flex-col justify-end items-end"
        >
          <View
            className="flex-row flex items-center"
          >
            <Image
              source={require("../assets/images/Star.png")}
              className="w-6 h-6 rounded-full"
            />
            <Text 
              className="ml-2"
            >4.8</Text>
          </View>
          <Text
            className="text-sm font-semibold"
          >HSW3434CJ</Text>
        </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cancel</Text>
          </TouchableOpacity>   
        </View>
      </View>
    </View>
  );
}
