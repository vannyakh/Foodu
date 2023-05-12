import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
function Message() {
  const resturant = useSelector(selectResturant);
  const [groupedItems, setGroupedItems] = useState([]);
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deliveryFee = 2;
  useMemo(() => {
    const gItems = basketItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(gItems);
    // console.log('items: ',gItems);
  }, [basketItems]);

  return (
    <SafeAreaView className=" bg-white flex-1">
      {/* top button */}
      <View className="flex justify-between items-center flex-row px-4 py-3 bg-white shadow-sm">
        <View className="flex justify-center items-center flex-row">
          <Image
            source={require("../assets/icon.png")}
            className="img-fluid h-12 w-12"
          />
          <Text className="text-xl font-bold ml-2">Message</Text>
        </View>
        <View className="relative flex justify-between items-center flex-row gap-2">
          <TouchableOpacity className="rounded-full p-1 shadow ">
            <Icon.Search strokeWidth={2} stroke="#212121" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full  shadow ">
            <Image
              source={require("../assets/images/MoreCircle.png")}
              className="h-7 w-7"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white pt-5"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* {Object.entries(groupedItems).map(([key, items]) => {
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text style={{ color: themeColors.text }} className="font-bold">
                {items.length} x{" "}
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {items[0]?.name}
              </Text>
              <Text className="font-semibold text-base">
                ${items[0]?.price}
              </Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })} */}
      </ScrollView>
      {/* totals */}
    </SafeAreaView>
  );
}

export default Message;
