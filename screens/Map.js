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

export default function Map() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(emptyBasket());
    navigation.navigate("HomeScreen");
  };
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
              Map
            </Text>
          </View>
        </View>
        <MapView
          initialRegion={{
            latitude: 11.553901,
            longitude: 104.8923029,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ flex: 1 }}
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: 11.553901,
              longitude: 104.8923029,
            }}
            title="Cambodia"
            pinColor={themeColors.bgColor(1)}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
}
