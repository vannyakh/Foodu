import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import DishRow from "../components/dishRow";
import BasketIcon from "../components/basketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant, setResturant } from "../slices/resturantSlice";
import { emptyBasket } from "../slices/basketSlice";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Filslist from "../components/Filslist";

export default function ResturantScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  let dispatch = useDispatch();
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      type,
      address,
      description,
      dishes,
      lng,
      lat,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    if (resturant && resturant.id != id) {
      dispatch(emptyBasket());
    }
    dispatch(
      setResturant({
        id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat,
      })
    );
  }, []);
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const backButtonStyle = {
    position: "absolute",
    left: 16,
    padding: 2,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    top: Platform.OS === "ios" ? 56 : 32,
    backgroundColor: "#f9fafb",
  };
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={backButtonStyle}
          >
            <Icon.ArrowLeft strokeWidth={2.5} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <View className="flex-row justify-between flex items-center px-4 rounded-full py-2 absolute  right-4  " 
            style={{ 
              top: Platform.OS === "ios" ? 50 : 24,
              backgroundColor: "rgba(0,0,0,0.2)",
          }}
          >
            <TouchableOpacity onPress={handleLikeToggle}
              className="mr-2"
            >
              <Image
                source={
                  liked
                    ? require("../assets/images/LikeFilled.png")
                    : require("../assets/images/Like.png")
                }
                style={{ width: 26, height: 26 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/Shares.png")}
                className="w-[26px] h-[26px]"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6 "
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{title}</Text>
            {/* copy this code from restaurant card */}
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> (4.6k review)</Text> ·{" "}
                  <Text className="font-semibold text-gray-700">{type}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> {address}</Text>
                <Text className="text-gray-800 text-xs"> | </Text>
                <Icon.Truck color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> 30-40 min</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{description}</Text>
          </View>
        </View>
        <View className="flex px-4 py-2 bg-white ">
          <Filslist />
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {dishes && dishes.length > 0 ? (
            dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            ))
          ) : (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text>No dishes available</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
