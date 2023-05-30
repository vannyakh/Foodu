import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../slices/resturantSlice";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { emptyBasket } from "../slices/basketSlice";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Feather } from '@expo/vector-icons';

export default function Map() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const dispatch = useDispatch();
  const [locations, setLocations] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const handleCancel = () => {
    dispatch(emptyBasket());
    navigation.navigate("HomeScreen");
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocations(location);
      console.log(locations.coords.latitude);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bgColor(1) }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={themeColors.bgColor(1)}
      />
      <View className="flex-1">
        {/* top button */}
        <View
          className="relative py-4 shadow-sm flex items-center flex-row justify-center"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            onPress={navigation.goBack}
            className="absolute z-10 rounded-full p-1 shadow  left-2"
          >
            <Icon.ArrowLeft strokeWidth={2} stroke="white" />
          </TouchableOpacity>
          <View>
            <Text className="text-center font-bold text-xl text-white">
              Map {locations && locations.coords ? `${locations.coords.latitude},${locations.coords.longitude}` : ''}
            </Text>
          </View>
        </View>
        {/* Render map or permission button */}
        {locations && locations.coords ? (
          <>
          <MapView
            initialRegion={{
              latitude: locations.coords.latitude,
              longitude: locations.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ flex: 1 }}
            mapType="standard"
          >
            <Marker
              coordinate={{
                latitude: locations.coords.latitude,
                longitude: locations.coords.longitude,
              }}
              title="Cambodia"
              pinColor={themeColors.bgColor(1)}
            />
          </MapView>
          {/* get curent user */}
          <View className="flex-row justify-center items-center absolute bottom-24 right-2 ">
          <TouchableOpacity
            onPress={() => {
              (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setErrorMsg("Permission to access location was denied");
                  console.log("Permission to access location was denied");
                  return;
                }
              })();
            }}
            className="flex-row justify-center items-center bg-green-500 rounded-full p-2  m-4 shadow"
          >
            <Feather name="disc" size={24} color="white" />
          </TouchableOpacity>
          </View>
          {/* Button save */}
        <View className="flex-row justify-center items-center">
          <TouchableOpacity
            onPress={handleCancel}
            className="flex-row justify-center items-center bg-red-500 rounded-full py-2 px-4 m-4 shadow"
          >
            <Text className="text-white font-bold text-lg">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            className="flex-row justify-center items-center bg-green-500 rounded-full py-2 px-4 m-4 shadow"
          >
            <Text className="text-white font-bold text-lg">Save</Text>
          </TouchableOpacity>
          </View>
          </>
        ) : (
          <Button
            title="Request Location Permission"
            onPress={() => {
              (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setErrorMsg("Permission to access location was denied");
                  console.log("Permission to access location was denied");
                  return;
                }
  
                let location = await Location.getCurrentPositionAsync({});
                setLocations(location);
              })();
            }}
          />
        )}
        
      </View>
    </SafeAreaView>
  );
  

}
